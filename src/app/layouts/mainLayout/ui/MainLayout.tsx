import { useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import s from './MainLayout.module.scss';
import { PathNames } from '@shared/config';
import { logout, setUser } from '@features/auth/authSlice';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { Header } from '@entities/home';
import { decryptData } from '@shared/utils';
import { Navigation } from './Navigation';
import { useGetUserByIdMutation } from '@entities/auth/api/authApi';

export const MainLayout = () => {
  const { email, id } = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [getUserById, { isLoading, error }] = useGetUserByIdMutation();

  const storageUser = useMemo(() => {
    return decryptData(localStorage.getItem('user') || 'null');
  }, []);

  const getUser = async () => {
    try {
      const response = await getUserById({ id }).unwrap();
      if ('message' in response) {
        dispatch(logout());
        throw new Error((response as { message: string }).message);
      }
      dispatch(setUser(response));
    } catch (err) {
      return navigate(PathNames.create, { replace: true });
    }
  };

  useEffect(() => {
    if (!email && !storageUser?.email) return navigate(PathNames.auth, { replace: true });
    getUser();
  }, [storageUser, email]);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Произошла ошибка</p>;

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
