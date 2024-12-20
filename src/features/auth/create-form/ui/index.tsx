import { AuthFormInputs } from '@features/auth/model/type';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { PathNames } from '@shared/config';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '@entities/auth/api/authApi';
import { AuthForm } from '@features/auth/auth-form';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';

export const CreateForm = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [userMessage, setUserMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthFormInputs> = async data => {
    try {
      delete data.conditions;
      const response = await createUser(data).unwrap();
      console.log(response);
      if ('email' in response) return navigate(PathNames.verify, { state: { email: response.email, password: response.password }, replace: true });
      setUserMessage((response as { message: string }).message);
    } catch (err) {
      handleAxiosError(err);
    }
  };

  return <AuthForm onSubmit={onSubmit} isLoading={isLoading} message={userMessage} mode='register' btnText='Зарегистрироваться' />;
};
