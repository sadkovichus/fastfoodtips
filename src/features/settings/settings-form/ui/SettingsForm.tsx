import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import s from './SettingsForm.module.scss';
import { SettingsFormInputs } from '@features/settings/model/type';
import { Button, Input } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setUser } from '@features/auth/authSlice';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { useGetStorage } from '@shared/hooks/useGetStorage';
import { UserType } from '@shared/types';
import { useChangeSettingsMutation } from '@entities/settings/api/settingApi';

export const SettingsForm = () => {
  const [storage, isLoadingStorage] = useGetStorage<UserType>(localStorage.getItem('user') as string);
  const [changeSettings, { isLoading }] = useChangeSettingsMutation();
  const dispatch = useAppDispatch();
  const [userMessage, setUserMessage] = useState('');

  // Инициализация useForm с defaultValues
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<SettingsFormInputs>({
    mode: 'all',
    defaultValues: {
      firstname: '',
      lastname: '',
      fathername: '',
    },
  });
  // Устанавливаем значения из storage после загрузки
  useEffect(() => {
    if (storage) {
      reset({
        firstname: storage.firstname || '',
        lastname: storage.lastname || '',
        fathername: storage.fathername || '',
      });
    }
  }, [storage, reset]);

  const onSubmit: SubmitHandler<SettingsFormInputs> = async data => {
    try {
      const response = await changeSettings({ ...storage, ...data }).unwrap();
      setUserMessage((response as { message: string }).message);
      dispatch(setUser({ ...storage, ...data } as UserType));
    } catch (err) {
      setUserMessage((err as { data: { message: string } }).data.message);
      console.log(handleAxiosError(err));
    }
  };

  if (isLoadingStorage) return <p>Загрузка...</p>;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors.firstname?.message}
        type='text'
        {...register('firstname')} // Управление из react-hook-form
        placeholder='Иван'
        title='Имя'
      />
      <Input error={errors.lastname?.message} type='text' {...register('lastname')} placeholder='Иванов' title='Фамилия' />
      <Input error={errors.fathername?.message} type='text' {...register('fathername')} placeholder='Иванович' title='Отчество' />
      {userMessage && <p className={s.msg}>{userMessage}</p>}
      <Button>{isLoading ? 'Загрузка...' : 'Применить'}</Button>
    </form>
  );
};
