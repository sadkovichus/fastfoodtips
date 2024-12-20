import { useState } from 'react'
import s from './Pay.module.scss';
import { useCreatePayMutation } from '@entities/pay/api/payApi'
import { useAppSelector } from '@shared/hooks/useAppSelector'

export const Pay = () => {
	const [value, setValue] = useState('');
	const [createApi] = useCreatePayMutation();
	const selector = useAppSelector(state => state.authReducer);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		console.log(selector)
		e.preventDefault();
		const response = await createApi({amount: value, email: selector.email})
		console.log(response);
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
