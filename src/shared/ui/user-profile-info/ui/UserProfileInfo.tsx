import { useAppSelector } from '@shared/hooks/useAppSelector';
import s from './UserProfileInfo.module.scss';
import { UserImg } from '@shared/assets';
import { useUploadAvatarMutation } from '@entities/settings/api/settingApi'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { setUser } from '@features/auth/authSlice'

export const UserProfileInfo = () => {
  const user = useAppSelector(state => state.authReducer);
  const [uploadAvatar, {isLoading}] = useUploadAvatarMutation();
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (!file) return;

      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function () {
          await uploadAvatar({avatar: (reader.result as string), id: user.id}).unwrap();
          dispatch(setUser({...user, avatarurl: reader.result}));
        };
        reader.onerror = function () {
          console.log(reader.error);
        };
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (isLoading || !user) return <p>Загрузка...</p>;

  return (
    <div className={s['text-info']}>
      <label htmlFor='user-photo-input' className={s.photo}>
        <img src={user.avatarurl ? user.avatarurl as string : UserImg} alt='' />
        <input onChange={handleFileChange} type='file' id='user-photo-input' />
      </label>
      <div className={s.info}>
        <p className={s.id}>{user.id}</p>
        <p className={s.email}>{user.email}</p>
      </div>
    </div>
  );
};