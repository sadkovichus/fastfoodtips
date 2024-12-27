import { Button, Input } from '@shared/ui';
import s from './PayCode.module.scss';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreatePayMutation } from '@entities/pay/api/payApi';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';

export const PayCode = () => {
  const { id } = useParams();
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
