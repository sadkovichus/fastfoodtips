import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, CheckBox } from '@shared/ui';
import s from './AuthForm.module.scss';
import { AuthFormInputs } from '@features/auth/model/type';
import { Link } from 'react-router-dom';
import { emailValidation, passwordValidation } from '@shared/const';
import { useCallback, useEffect } from 'react'
import { PathNames } from '@shared/config'

interface AuthFormProps {
  onSubmit: SubmitHandler<AuthFormInputs>;
  isLoading: boolean;
  message: string;
  mode: 'login' | 'register';
  btnText: string;
}

export const AuthForm = ({ onSubmit, isLoading, message, mode, btnText }: AuthFormProps) => {
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

  useEffect(() => {
    console.log(message);
  }, [message])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <Input
        error={errors.email?.message}
        type='email'
        {...register('email', emailValidation)}
        placeholder='example@gmail.com'
        title='Введите свою gmail почту'
      />
      <Input
        error={errors.password?.message}
        type='password'
        {...register('password', passwordValidation)}
        placeholder='Пароль'
        title='Введите пароль'
      />
      {mode === 'register' && (
        <CheckBox
          handleChecked={clearConditionsError}
          error={errors.conditions?.message}
          {...register('conditions', { required: 'Вы должны согласиться с Договором аферты' })}>
          <Link to={PathNames.license}>Договор оферты и соглашение о персональных данных</Link> При нарушении правил использования сервиса, виртуальная карта
          будет заблокирована вместе с вашими средствами
        </CheckBox>
      )}
      {message && <p className={s.usmsg}>{message}</p>}
      <Button>{isLoading ? 'Загрузка...' : btnText}</Button>
    </form>
  );
};
