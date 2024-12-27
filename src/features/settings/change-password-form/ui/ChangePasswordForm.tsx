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

  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = async data => {
    try {
      await changePassword({ ...data, userId: storage.id }).unwrap();
      dispatch(setUser({ ...storage, ...data } as UserType));
      reset();
    } catch (err) {
      handleAxiosError(err);
    }
  };

  if (isLoadingStorage) return <p>Загрузка...</p>;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input error={errors.newPassword?.message} type='text' {...register('newPassword', passwordValidation)} title='Новый пароль' />
      <Input error={errors.oldPassword?.message} type='password' {...register('oldPassword', passwordValidation)} title='Старый пароль' />
      <Button>{isLoading ? 'Загрузка...' : 'Отправить'}</Button>
    </form>
  );
};
