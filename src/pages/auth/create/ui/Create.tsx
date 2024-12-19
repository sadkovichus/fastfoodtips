import { Link } from 'react-router-dom';
import s from './Create.module.scss';
import { PathNames } from '@shared/config';
import { CreateForm } from '@features/'

export const Create = () => {
  return (
    <div className={s.login}>
      <header className={s.top}>
        <h1 className={s.title}>Создайте аккаунт</h1>
        <p className={s.subtitle}>
          Уже есть аккаунт? <Link to={PathNames.auth}>Войти</Link>.
        </p>
      </header>
      <CreateForm />
    </div>
  );
};
