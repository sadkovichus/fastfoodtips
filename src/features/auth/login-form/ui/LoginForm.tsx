import { SubmitHandler, useForm } from 'react-hook-form';
import s from './LoginForm.module.scss';
import { useCallback } from 'react';
import { Button, CheckBox, Input } from '@shared/ui';
import { passwordValidation } from '@shared/const';
import { Link } from 'react-router-dom';
import { PathNames } from '@shared/config';
import { AuthFormInputs } from '@features/auth/model/type'

export const LoginForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    clearErrors,
    setValue,
  } = useForm<AuthFormInputs>({ mode: 'all' });

  const clearConditionsError = useCallback(
    (checked: boolean) => {
      if (checked) clearErrors('conditions');
      setValue('conditions', checked);
    },
    [clearErrors, setValue]
  );

  const onSubmit: SubmitHandler<AuthFormInputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Input
        error={errors.phone?.message}
        type='number'
        {...register('phone', { required: 'Введите номер телефона', minLength: { value: 10, message: 'Номер должен состоять из 10 цифр' } })}
        placeholder='(999) 999-99-99'
        title='Введите номер телефона'
        prevLetter='+7'
        maxLength={10}
      />
      <Input
        error={errors.password?.message}
        type='password'
        {...register('password', passwordValidation)}
        placeholder='Пароль'
        title='Введите пароль'
      />
      <CheckBox
        handleChecked={clearConditionsError}
        error={errors.conditions?.message}
        {...register('conditions', { required: 'Вы должны согласиться с Договором аферты' })}>
        <Link to={PathNames.root}>Договор оферты и соглашение о персональных данных </Link> При нарушении правил использования сервиса, виртуальная
        карта будет заблокирована вместе с вашими средствами
      </CheckBox>
      <Button>Войти</Button>
    </form>
  );
};
