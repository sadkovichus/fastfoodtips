import { Navigate, Outlet } from 'react-router-dom';
import s from './MainLayout.module.scss';
import { PathNames } from '@shared/config'

export const MainLayout = () => {
	const isAuth = false;

	if (!isAuth) return <Navigate to={PathNames.auth} replace/>

	return (
    <div className={s.main}>
      <header>Header</header>
      <Outlet />
    </div>
  );
};
