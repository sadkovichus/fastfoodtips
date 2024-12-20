import { useAppSelector } from '@shared/hooks/useAppSelector';
import s from './Header.module.scss';
import { PathNames } from '@shared/config';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { email, balance } = useAppSelector(state => state.authReducer);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <p className={s.balance}>{balance}₽</p>
        <Link to={PathNames.root}>{email}</Link>
      </div>
    </header>
  );
};
