import { SubmitHandler, useForm } from 'react-hook-form';
import s from './SettingsForm.module.scss';
import { SettingsFormInputs } from '@features/settings/model/type';
import { Button, Input } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setUser } from '@features/auth/authSlice';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { useGetStorage } from '@shared/hooks/useGetStorage';
import { UserType } from '@shared/types';
import { useChangeSettingsMutation } from '@entities/settings/api/settingApi'

export const SettingsForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SettingsFormInputs>({ mode: 'all' });
  const [storage, isLoadingStorage] = useGetStorage<UserType>(localStorage.getItem('user') as string);
  const [changeSettings, { isLoading }] = useChangeSettingsMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SettingsFormInputs> = async data => {
    try {
      console.log({ ...storage, ...data });
      await changeSettings({ ...storage, ...data }).unwrap();
      dispatch(setUser({ ...storage, ...data } as UserType));
    } catch (err) {
      handleAxiosError(err);
    }
  };

  if (isLoadingStorage) return <p>Загрузка...</p>;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input error={errors.firstname?.message} type='text' {...register('firstname')} value={storage?.firstname} placeholder='Иван' title='Имя' />
      <Input error={errors.lastname?.message} type='text' {...register('lastname')} value={storage?.lastname} placeholder='Иванов' title='Фамилия' />
      <Input
        error={errors.fathername?.message}
        type='text'
        {...register('fathername')}
        value={storage?.fathername}
        placeholder='Иванович'
        title='Отчество'
      />
      <Button>{isLoading ? 'Загрузка...' : 'Применить'}</Button>
    </form>
  );
};
