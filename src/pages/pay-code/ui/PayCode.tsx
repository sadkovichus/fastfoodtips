import { Button, Input } from '@shared/ui';
import s from './PayCode.module.scss';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreatePayMutation } from '@entities/pay/api/payApi';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { useEffect, useState } from 'react';
import { UserType } from '@shared/types';
import { useGetUserByIdMutation } from '@entities/auth/api/authApi';
import { UserImg } from '@shared/assets';

export const PayCode = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserType>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [getUserById] = useGetUserByIdMutation();
  const [createPay] = useCreatePayMutation();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<{ amount: string }>({ mode: 'all' });

  const quickAmounts = [100, 200, 400, 600, 1000];

  const handleQuickAmount = (amount: number) => {
    handleSubmit(data => onSubmit({ amount: amount.toString() }))();
  };

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
        } else {
          setUser(userData as UserType);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Неизвестная ошибка');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id, getUserById]);

  const onSubmit: SubmitHandler<{ amount: string }> = async data => {
    try {
      const response = await createPay({ amount: data.amount, userId: id as string }).unwrap();
      window.location.href = response.confirmationUrl;
    } catch (err) {
      console.log(handleAxiosError(err));
    }
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div className={s.pay}>
      <div className={s.container}>
        <img className={s.avatar} src={(user.avatarurl as string) || UserImg} alt='User avatar' />
        <div className={s.userInfo}>
          <h3>{[user.lastname, user.firstname, user.fathername].filter(Boolean).join(' ') || 'Пользователь'}</h3>
          <p>{user.email}</p>
        </div>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input error={errors.amount?.message} type='text' {...register('amount')} placeholder='Сумма' title='Сумма перевода' />

          <div className={s.quickAmounts}>
            {quickAmounts.map(amount => (
              <Button key={amount} className={s.amountButton} type='button' onClick={() => handleQuickAmount(amount)}>
                {amount} ₽
              </Button>
            ))}
          </div>

          <Button>Перевести</Button>
        </form>
      </div>
    </div>
  );
};
