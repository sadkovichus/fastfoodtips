import classNames from '@shared/lib/classnames';
import s from './Button.module.scss';
import { useNavigate } from 'react-router-dom';
import { Props } from '../model/type'

export const Button = ({ children, className, param = false, navigateTo = '', onClick, ...props }: Props) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (param && navigateTo) {
      navigate(navigateTo, { replace: true });
    }
  };

  return (
    <button onClick={handleClick} className={classNames(s.btn, className)} {...props}>
      {children}
    </button>
  );
};
