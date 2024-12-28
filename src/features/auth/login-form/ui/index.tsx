import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '@shared/config';
import { AuthFormInputs } from '@features/auth/model/type';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setUser } from '@features/auth/authSlice';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';
import { AuthForm } from '@features/auth/auth-form';
import { useLoginMutation } from '@entities/auth/api/authApi'

export const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userMessage, setUserMessage] = useState('');

  const onSubmit: SubmitHandler<AuthFormInputs> = async data => {
    try {
      delete data.conditions;
      const response = await login(data).unwrap();
      console.log(response);
      if ('message' in response) return setUserMessage((response as { message: string }).message);
      dispatch(setUser(response));
      navigate(PathNames.root, { replace: true });
    } catch (err) {
      setUserMessage((err as { data: { message: string } }).data.message);
      console.log(handleAxiosError(err));
    }
  };

  return <AuthForm onSubmit={onSubmit} isLoading={isLoading} message={userMessage} mode='login' btnText='Войти' />;
};
