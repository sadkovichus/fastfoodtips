import s from './VerifyForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input } from '@shared/ui';
import { useLoginMutation, useVerifyCodeMutation } from '@entities/auth/api/authApi';
import { useState } from 'react';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { setUser } from '@features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { PathNames } from '@shared/config'
import { Props } from '../model/type'

export const VerifyForm = ({email, password}: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<{ code: string }>({ mode: 'all' });
  const [verifyCode, { isLoading }] = useVerifyCodeMutation();
  const [login] = useLoginMutation();
  const [userMessage, setUserMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{ code: string }> = async data => {
    try {
      const response = await verifyCode(data).unwrap();
      if ('message' in response) return setUserMessage((response as { message: string }).message);
      const responseLogin = await login({ email, password }).unwrap();
      dispatch(setUser(responseLogin));
      navigate(PathNames.root, { replace: true });
    } catch (err) {
      handleAxiosError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Input
        error={errors.code?.message}
        type='number'
        {...register('code', { required: 'Введите код', minLength: { value: 4, message: 'Код должен состоять из 4 цифр' } })}
        placeholder='0000'
        title='Ведите код из смс'
        maxLength={4}
      />
      {userMessage && <p className={s.usmsg}>{userMessage}</p>}
      <Button>{isLoading ? 'Загрузка...' : 'Отправить'}</Button>
    </form>
  );
};
