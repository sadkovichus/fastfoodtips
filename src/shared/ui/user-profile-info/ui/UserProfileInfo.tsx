import { useAppSelector } from '@shared/hooks/useAppSelector';
import s from './UserProfileInfo.module.scss'
import { UserImg } from '@shared/assets'

export const UserProfileInfo = () => {
  const { id, email } = useAppSelector(state => state.authReducer);

  return (
    <div className={s['text-info']}>
      <label htmlFor='user-photo-input' className={s.photo}>
        <img src={UserImg} alt='' />
        <input type='file' id='user-photo-input' />
      </label>
      <div className={s.info}>
        <p className={s.id}>{id}</p>
        <p className={s.email}>{email}</p>
      </div>
    </div>
  );
};
