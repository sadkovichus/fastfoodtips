import { UserProfileInfo } from '@shared/ui/user-profile-info';
import s from './Settings.module.scss';
import { Outlet } from 'react-router-dom';
import { PathNames } from '@shared/config';
import { CustomLink } from '@shared/ui'

export const Settings = () => {
  return (
    <div className={s.settings}>
      <h1 className={s.title}>Настройки профиля</h1>
      <div className={s.container}>
        <div className={s.left}>
          <UserProfileInfo />
          <CustomLink activeClassName={s.active} to={PathNames.changePassword}>→ Сменить пароль</CustomLink>
					<CustomLink activeClassName={s.active} to={PathNames.settings}>→ Мои данные</CustomLink>
        </div>
        <div className={s.right}>
          <h1 className={s.title}>Ваши данные</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
