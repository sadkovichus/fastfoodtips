import { useAppSelector } from '@shared/hooks/useAppSelector';
import s from './Header.module.scss';
import { PathNames } from '@shared/config';
import { Link } from 'react-router-dom';

type Props = {
  handleActive: (value: boolean) => void;
};

export const Header = ({ handleActive }: Props) => {
  const { email, balance } = useAppSelector(state => state.authReducer);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <p className={s.balance}>{balance}₽</p>
        <Link to={PathNames.root}>{email}</Link>
        <button className={s.exit} onClick={() => handleActive(true)}>
          ≡
        </button>
      </div>
    </header>
  );
};
