import { Button, Input } from '@shared/ui';
import s from './PayCode.module.scss';
import { Navigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreatePayMutation } from '@entities/pay/api/payApi';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { useEffect, useState } from 'react';
import { UserType } from '@shared/types';
import { useGetUserByIdMutation } from '@entities/auth/api/authApi';
import { UserImg } from '@shared/assets';
import { useDynamicMeta } from '@shared/hooks/useDynamicMeta';
import { PathNames } from '@shared/config';

export const PayCode = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserType>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [getUserById] = useGetUserByIdMutation();
  const [createPay] = useCreatePayMutation();
  const { setDynamicMeta } = useDynamicMeta();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<{ amount: string }>({ mode: 'all' });

  const quickAmounts = [100, 200, 400, 600, 1000];
  const currentAmount = watch('amount');

  const handleQuickAmount = (amount: number) => {
    const currentValue = currentAmount ? parseInt(currentAmount) : 0;
    if (!isNaN(currentValue)) {
      setValue('amount', (currentValue + amount).toString());
    } else {
      setValue('amount', amount.toString());
    }
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

    setDynamicMeta({
      'og:title': `Отправка чаевых для ${user?.firstname}`,
      'og:description': `Отправка чаевых для ${user?.firstname}`,
      'og:image': `${user?.avatarurl}`,
    });

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
  if (error) return <Navigate to={PathNames.root} replace />;
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
          <Input value={currentAmount} error={errors.amount?.message} type='number' min='0' {...register('amount')} placeholder='0₽' title='Сумма перевода' />

          <div className={s.quickAmounts}>
            {quickAmounts.map(amount => (
              <Button key={amount} className={s.amountButton} type='button' onClick={() => handleQuickAmount(amount)}>
                {amount} ₽
              </Button>
            ))}
          </div>

          <Button>{isLoading ? 'Перевод...' : 'Перевести'}</Button>
        </form>
      </div>
    </div>
  );
};
