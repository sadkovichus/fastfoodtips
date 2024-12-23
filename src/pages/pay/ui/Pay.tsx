import { useState } from 'react'
import s from './Pay.module.scss';
import { useCreatePayMutation } from '@entities/pay/api/payApi'

export const Pay = () => {
	const [value, setValue] = useState('');
	const [createApi] = useCreatePayMutation();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// const response = await createApi({amount: value, email: selector.email})
	}

  return (
    <div className={s.pay}>
      <form onSubmit={onSubmit} action='#'>
        <input onChange={e => setValue(e.target.value)} value={value} type='text' placeholder='Сумма' />
        <button>Оплатить</button>
      </form>
    </div>
  );
};
