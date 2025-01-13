import { Button, Input } from '@shared/ui';
import s from './PayCode.module.scss';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreatePayMutation } from '@entities/pay/api/payApi';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { PathNames } from '@shared/config';
import { useEffect, useState } from 'react';
import { useGetUserByIdMutation } from '@entities/auth/api/authApi';
import { UserType } from '@shared/types'

export const PayCode = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [user, setUser] = useState<UserType>();
  const [getUserById, { isLoading }] = useGetUserByIdMutation();
  const [isLoadingStatus, setIsLoadingStatus] = useState(isLoading);
  // ... existing code ...
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchUser = async () => {
      if (!state?.user && id) {
        try {
          setIsLoadingStatus(true);
          const userData = await getUserById({ id: id as string }).unwrap();

          if ('message' in userData) {
            setError(userData.message);
            return;
          }

          if (!('name' in userData)) {
            setError('Некорректные данные пользователя');
            return;
          }

          setUser(userData as UserType);
        } catch (error) {
          setError(error instanceof Error ? error.message : 'Неизвестная ошибка');
        } finally {
          setIsLoadingStatus(false);
        }
      }
    };
    fetchUser();
  }, [state?.user, id]);

  if (error) return <div>Ошибка: {error}</div>;

  if (isLoadingStatus) return <div>Загрузка...</div>;

  useEffect(() => {
    console.log(user);
  }, [user]);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<{ amount: string }>({ mode: 'all' });
  const [createPay] = useCreatePayMutation();

  const onSubmit: SubmitHandler<{ amount: string }> = async data => {
    try {
      const response = await createPay({ amount: data.amount, userId: id as string }).unwrap();
      window.location.href = response.confirmationUrl;
    } catch (err) {
      console.log(handleAxiosError(err));
    }
  };

  return (
    <div className={s.pay} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container}>
        <form className={s.form}>
          <Input error={errors.amount?.message} type='text' {...register('amount')} placeholder='Amount' title='Amount' />
          <Button>Перевести</Button>
        </form>
      </div>
    </div>
  );
};
