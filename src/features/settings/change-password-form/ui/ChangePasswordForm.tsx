import { SubmitHandler, useForm } from 'react-hook-form';
import s from './ChangePasswordForm.module.scss';
import { ChangePasswordFormInputs } from '@features/settings/model/type';
import { Button, Input } from '@shared/ui';
import { passwordValidation } from '@shared/const';

export const ChangePasswordForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ChangePasswordFormInputs>({ mode: 'all' });
  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = async data => {
    console.log(data);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors.password?.message}
        type='password'
        {...register('password', passwordValidation)}
        title='Новый пароль'
      />
      <Input
        error={errors.prevPassword?.message}
        type='password'
        {...register('prevPassword', passwordValidation)}
        title='Старый пароль'
      />
      <Button>Применить</Button>
    </form>
  );
};
