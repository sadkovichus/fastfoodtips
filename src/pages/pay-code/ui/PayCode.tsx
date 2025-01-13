import { Button, Input } from '@shared/ui';
import s from './PayCode.module.scss';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreatePayMutation } from '@entities/pay/api/payApi';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { useEffect, useState } from 'react';
import { UserType } from '@shared/types';
import { useGetUserByIdMutation } from '@entities/auth/api/authApi';

export const PayCode = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserType>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [getUserById] = useGetUserByIdMutation();

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        setError('ID пользователя не указан');
        setIsLoading(false);
        return;
      }

      try {
        const userData = await getUserById({ id }).unwrap();

        if ('message' in userData) {
          setError(userData.message);
          return;
        }

        setUser(userData as UserType);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Неизвестная ошибка');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id, getUserById]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!user) return <div>Пользователь не найден</div>;

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
    <div className={s.pay}>
      <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input error={errors.amount?.message} type='text' {...register('amount')} placeholder='Amount' title='Amount' />
          <Button>Перевести</Button>
        </form>
      </div>
    </div>
  );
};
