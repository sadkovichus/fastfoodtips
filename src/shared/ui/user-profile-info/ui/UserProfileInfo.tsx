import { useAppSelector } from '@shared/hooks/useAppSelector';
import s from './UserProfileInfo.module.scss';
import { UserImg } from '@shared/assets';
import { useUploadAvatarMutation } from '@entities/settings/api/settingApi';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setUser } from '@features/auth/authSlice';
import { useEffect } from 'react';

export const UserProfileInfo = () => {
  const user = useAppSelector(state => state.authReducer);
  const [uploadAvatar, { isLoading }] = useUploadAvatarMutation();
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (!file) return;

      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function () {
          await uploadAvatar({ avatar: reader.result as string, id: user.id }).unwrap();
          if (!('url' in uploadAvatar)) return new Error('Произошла ошибка при загрузке аватара');
          console.log(uploadAvatar);
          dispatch(setUser({ ...user, avatarurl: uploadAvatar.url as string }));
        };
        reader.onerror = function () {
          console.log(reader.error);
        };
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (isLoading || !user) return <p>Загрузка...</p>;

  return (
    <div className={s['text-info']}>
      <label htmlFor='user-photo-input' className={s.photo}>
        <img src={'https://s3.ru1.storage.beget.cloud/0d359ab52f5c-fastfoodtips/uploads/1737582664151.jpg'} alt='' />
        <input onChange={handleFileChange} type='file' id='user-photo-input' />
      </label>
      <div className={s.info}>
        <p className={s.id}>{user.id}</p>
        <p className={s.email}>{user.email}</p>
      </div>
    </div>
  );
};
