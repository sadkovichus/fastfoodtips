import { SubmitHandler, useForm } from 'react-hook-form';
import s from './SettingsForm.module.scss';
import { SettingsFormInputs } from '@features/settings/model/type';
import { Button, Input } from '@shared/ui';
import { emailValidation } from '@shared/const';
import { useAppSelector } from '@shared/hooks/useAppSelector';

export const SettingsForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SettingsFormInputs>({ mode: 'all' });
  const { email } = useAppSelector(state => state.authReducer);

  const onSubmit: SubmitHandler<SettingsFormInputs> = async data => {
    console.log(data);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors.email?.message}
        type='email'
        {...register('email', emailValidation)}
        placeholder='example@gmail.com'
        value={email}
        title='Введите свою новую почту'
      />
      <Input error={errors.email?.message} type='text' {...register('name')} value='Иван' placeholder='Иван' title='Имя' />
      <Input error={errors.email?.message} type='text' {...register('lastName')} value='Иванов' placeholder='Иванов' title='Фамилия' />
      <Button>Применить</Button>
    </form>
  );
};
