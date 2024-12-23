import s from './Home.module.scss';
import { UserProfileInfo } from '@shared/ui/user-profile-info'
import { Card } from './Card'

export const Home = () => {

  return (
    <div className={s.home}>
      <h1 className={s.title}>Ваша информация</h1>
      <div className={s.content}>
        <section className={s['user-info']}>
          <UserProfileInfo />
          <Card />
        </section>
        <section className={s['last-transactions']}>
          <h1 className={s.title}>Последние действия</h1>
        </section>
      </div>
    </div>
  );
};
