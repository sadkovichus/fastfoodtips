import { useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import s from './MainLayout.module.scss';
import { PathNames } from '@shared/config';
import { setUser } from '@features/auth/authSlice';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { Header } from '@entities/home';
import { decryptData } from '@shared/utils';
import { Navigation } from './Navigation';

export const MainLayout = () => {
  const { email } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const storageUser = useMemo(() => {
    return decryptData(localStorage.getItem('user') || 'null');
  }, []);

  useEffect(() => {
    if (!email && !storageUser?.email) return navigate(PathNames.auth, { replace: true });
    dispatch(setUser(storageUser));
  }, [storageUser, email]);

  return (
    <div className={s.main}>
      {isActive && <div className={s.overlay} onClick={() => setIsActive(false)} />}
      <div className={s.content}>
        <Header handleActive={setIsActive} />
        <section className={s.container}>
          <Outlet />
        </section>
      </div>
      <Navigation handleActive={setIsActive} active={isActive} />
    </div>
  );
};
