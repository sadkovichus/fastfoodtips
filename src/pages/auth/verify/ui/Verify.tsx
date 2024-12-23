import { Link, Navigate, useLocation } from 'react-router-dom';
import s from './Verify.module.scss';
import { PathNames } from '@shared/config';
import { VerifyForm } from '@features/';

export const Verify = () => {
  const location = useLocation();

  if (!location.state) return <Navigate to={PathNames.create} replace/>

  return (
    <div className={s.login}>
      <header className={s.top}>
        <h1 className={s.title}>Введите код пришедший вам по смс</h1>
        <p className={s.subtitle}>
          Не приходит код? <Link to={PathNames.create}>Отправить код снова</Link>.
        </p>
      </header>
      <VerifyForm email={location.state.email} password={location.state.password} />
    </div>
  );
};
