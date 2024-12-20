import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import s from './MainLayout.module.scss';
import { PathNames } from '@shared/config';
import { setUser } from '@features/auth/authSlice';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { Header } from '@entities/home'

export const MainLayout = () => {
  const { email, token: selectorToken } = useAppSelector(state => state.authReducer);
  const storageUser = JSON.parse(localStorage.getItem('user') || 'null');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('e')
    if (storageUser?.email) {
      console.log('1');
      dispatch(setUser(storageUser));
      return;
    }
    if (!email && !storageUser?.email && !selectorToken) {
      console.log('2');
      navigate(PathNames.auth, { replace: true });
      return;
    }
  }, [email, selectorToken, storageUser, dispatch, navigate]);

  return (
    <div className={s.main}>
      <div className={s.content}>
        <Header />
        <Outlet />
      </div>
      <nav className={s.nav}>
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
        <button className={s.btn}>Выйти</button>
      </nav>
    </div>
  );
};
