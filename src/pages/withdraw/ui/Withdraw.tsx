import { SubmitHandler, useForm } from 'react-hook-form';
import s from './Withdraw.module.scss';
import { Button, Input } from '@shared/ui';
import { commission } from '../utils/comission'
import { useEffect, useState } from 'react'

type TWithdrawForm = {
  cardNumber: string;
  amount: string;
  secretKey: string;
};

export const Withdraw = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TWithdrawForm>({ mode: 'all' });
  const [amount, setAmount] = useState(0);

  const onSubmit: SubmitHandler<TWithdrawForm> = data => {
    console.log(data);
  };

  useEffect(() => {
    console.log(amount)
  }, [amount])

  return (
    <div className={s.withdraw}>
      <h1 className={s.title}>Вывод денежных средств</h1>
      <section className={s.content}>
        <div className={s['available-balance']}>
          <h4 className={s.text}>Доступно:</h4>
          <h4 className={s.balance}>0</h4>
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            maxLength={16}
            error={errors.cardNumber?.message}
            type='number'
            {...register('cardNumber', { required: 'Введите номер карты' })}
            title='Номер карты'
          />
          <Input onInput={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(+e.target.value)} error={errors.amount?.message} type='number' {...register('amount', { required: 'Введите сумму' })} title='Сумма' />
          <Input
            error={errors.secretKey?.message}
            type='password'
            {...register('secretKey', { required: 'Введите секретный ключ' })}
            title='Секретный ключ'
          />
          <div className={s['sum-to-withdraw']}>
            <h4 className={s.text}>Будет списано:</h4>
            <h4 className={s.sum}>{amount-commission(amount)}</h4>
          </div>
          <div className={s['commission-to-withdraw']}>
            <h4 className={s.text}>Комиссия:</h4>
            <h4 className={s.commission}>{commission(amount)}</h4>
          </div>
          <Button>Вывести</Button>
        </form>
      </section>
    </div>
  );
};
