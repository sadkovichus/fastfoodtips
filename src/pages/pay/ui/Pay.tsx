import { useState } from 'react';
import { Button, Input } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '@shared/config';
import s from './Pay.module.scss';
import { useGetUserByIdMutation } from '@entities/auth/api/authApi';
import { handleAxiosError } from '@shared/lib/axios/handleAxiosError';

export const Pay = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const [getUserById] = useGetUserByIdMutation();
  const [errorMessage, setErrorMessage] = useState('');

  const formatValue = (input: string) => {
    const cleanValue = input.replace(/[^a-zA-Z0-9]/g, ''); // Убираем ненужные символы
    return cleanValue.match(/.{1,3}/g)?.join('-') || cleanValue; // Форматируем строку
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatValue(inputValue);
    setValue(formattedValue);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await getUserById({ id: value });
      if ('message' in user) {
        throw new Error((user as { message: string }).message);
      } else if ('error' in user) {
        throw new Error((user as { error: string }).error);
      } else {
        navigate(`${PathNames.pay}/${value}`, { state: { user: user } });
      }
    } catch (err) {
      console.log(handleAxiosError(err));
      setErrorMessage('Ошибка при получении пользователя, попробуйте позже');
    }
  };

  return (
    <div className={s.pay}>
      <form className={s.form} onSubmit={onSubmit}>
        <p className={s.title}>Введите код получателя</p>
        <Input
          error={errorMessage && errorMessage}
          maxLength={7}
          onChange={handleChange}
          value={value}
          type='text'
          placeholder='Введите код получателя'
          className={s.input}
        />
        <Button>Перейти</Button>
      </form>
    </div>
  );
};
