import { PathNames } from '@shared/config';
import s from './MainLayout.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { logout } from '@features/auth/authSlice';
import classNames from '@shared/lib/classnames';
import { useEffect } from 'react';

type Props = {
  handleActive: (value: boolean) => void;
  active: boolean;
};

export const Navigation = ({ handleActive, active }: Props) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    handleActive(false);
  }, [location]);

   const handleLogout = () => {
     dispatch(logout());
     navigate(PathNames.auth, { replace: true });
   };

  return (
    <nav className={classNames(s.nav, { [s.active]: active })}>
      <p className={s.close} onClick={() => handleActive(false)}>
        X
      </p>
      <ul className={s.list}>
        <li>
          <Link to={PathNames.root}>Главная</Link>
        </li>
        <li>
          <Link to={PathNames.settings}>Настройки</Link>
        </li>
        <li>
          <Link to={PathNames.myLink}>Моя ссылка</Link>
        </li>
      </ul>
      <button type='button' onClick={handleLogout} className={s.btn}>
        Выйти
      </button>
    </nav>
  );
};
