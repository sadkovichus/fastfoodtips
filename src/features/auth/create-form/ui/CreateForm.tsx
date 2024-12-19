import { AuthFormInputs } from '@features/auth/model/type';
import s from './CreateForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { Button, CheckBox, Input } from '@shared/ui';
import { passwordValidation } from '@shared/const';
import { PathNames } from '@shared/config';
import { Link } from 'react-router-dom';
import { useCreateUserMutation } from '@entities/auth/api/authApi';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setUser } from '@features/auth/authSlice'
import { AxiosError } from 'axios'

export const CreateForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    clearErrors,
    setValue,
  } = useForm<AuthFormInputs>({ mode: 'all' });
  const [create, { isLoading }] = useCreateUserMutation();
  const dispatch = useAppDispatch();

  const clearConditionsError = useCallback(
    (checked: boolean) => {
      if (checked) clearErrors('conditions');
      setValue('conditions', checked);
    },
    [clearErrors, setValue]
  );

  const onSubmit: SubmitHandler<AuthFormInputs> = async data => {
    try {
      delete data.conditions;
      data.phone = `+7${data.phone}`;
      const response = await create(data).unwrap();
      dispatch(setUser(response));
    } catch (err) {
      const axiosError = err as AxiosError;
      console.log(axiosError.response?.data);
    }
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
      <Button>{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}</Button>
    </form>
  );
};
