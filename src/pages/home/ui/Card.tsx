import { useAppSelector } from '@shared/hooks/useAppSelector';
import s from './Home.module.scss'
import classNames from '@shared/lib/classnames'

export const Card = () => {
  const { balance } = useAppSelector(state => state.authReducer);

  return (
    <div className={s.card}>
      <div className={classNames(s.header, s.colmn)}>
        <p className={s.haw}>Доступно для вывода</p>
        <p className={s.value}>{balance} ₽</p>
      </div>
      <div className={classNames(s.middle, s.colmn)}>
        <p className={s['on-week']}>За неделю</p>
        <div className={s['info-of-week']}>
          <div className={s.colmn}>
            Чаевые
            <p className={s.value}>0 ₽</p>
          </div>
          <div className={s.colmn}>
            Выведено
            <p className={s.value}>0 ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
};
