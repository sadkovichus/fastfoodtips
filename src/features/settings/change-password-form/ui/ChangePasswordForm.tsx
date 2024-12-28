import { SubmitHandler, useForm } from 'react-hook-form';
import s from './ChangePasswordForm.module.scss';
import { ChangePasswordFormInputs } from '@features/settings/model/type';
import { Button, Input } from '@shared/ui';
import { passwordValidation } from '@shared/const';
import { useChangePasswordMutation } from '@entities/settings/api/settingApi';
import { useGetStorage } from '@shared/hooks/useGetStorage';
import { UserType } from '@shared/types';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setUser } from '@features/auth/authSlice';
import { useState } from 'react';

export const ChangePasswordForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ChangePasswordFormInputs>({ mode: 'all' });
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [storage, isLoadingStorage] = useGetStorage<UserType>(localStorage.getItem('user') as string);
  const dispatch = useAppDispatch();
  const [userMessage, setUserMessage] = useState('');

  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = async data => {
    try {
      await changePassword({ ...data, userId: storage.id }).unwrap();
      setUserMessage('Пароль успешно изменен');
      dispatch(setUser({ ...storage, ...data } as UserType));
      reset();
    } catch (err) {
      setUserMessage((err as { data: { message: string } }).data.message);
      console.log(handleAxiosError(err));
    }
  };

  if (isLoadingStorage) return <p>Загрузка...</p>;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input error={errors.newPassword?.message} type='password' {...register('newPassword', passwordValidation)} title='Новый пароль' />
      <Input error={errors.oldPassword?.message} type='text' {...register('oldPassword', passwordValidation)} title='Старый пароль' />
      {userMessage && <p className={s.msg}>{userMessage}</p>}
      <Button>{isLoading ? 'Загрузка...' : 'Отправить'}</Button>
    </form>
  );
};
