import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import { PathNames } from '@shared/config';
import { LoginForm } from '@features/';

export const Login = () => {
  return (
    <div className={s.login}>
      <header className={s.top}>
        <h1 className={s.title}>Войти в аккаунт</h1>
        <p className={s.subtitle}>
          Ещё не аккаунта? <Link to={PathNames.create}>Создайте его</Link>.
        </p>
      </header>
      <LoginForm />
    </div>
  );
};
