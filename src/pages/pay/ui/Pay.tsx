import { useState } from 'react';
import { Button, Input } from '@shared/ui';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '@shared/config';
import s from './Pay.module.scss';

export const Pay = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const formatValue = (input: string) => {
    const cleanValue = input.replace(/[^a-zA-Z0-9]/g, ''); // Убираем ненужные символы
    return cleanValue.match(/.{1,3}/g)?.join('-') || cleanValue; // Форматируем строку
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatValue(inputValue);
    setValue(formattedValue);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`${PathNames.pay}/${value}`);
  };

  return (
    <div className={s.pay}>
      <form className={s.form} onSubmit={onSubmit}>
        <p className={s.title}>Введите код получателя</p>
        <Input maxLength={7} onChange={handleChange} value={value} type='text' placeholder='Введите код получателя' className={s.input} />
        <Button>Перейти</Button>
      </form>
    </div>
  );
};
