import s from './CheckBox.module.scss';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import CheckMarkImg from '../model/assets/icons8-галочка-48.png';
import { Props } from '../model/type'
import classNames from '@shared/lib/classnames'

export const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ handleChecked, className, children, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
      handleChecked?.(isChecked);
    }, [isChecked, handleChecked]); // Добавьте handleChecked в зависимости

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };

    return (
      <div className={classNames(s['check-mark-container'], className)}>
        <label className={s['check-mark-label']} htmlFor='login-conditions' {...props}>
          <input ref={ref} id='login-conditions' onChange={handleChange} type='checkbox' name='login-conditions' style={{ display: 'none' }} />
          <div className={classNames(s['check-mark'], { [s['check-mark-active']]: isChecked })}>{isChecked && <img src={CheckMarkImg} alt='' />}</div>
          <p className={s['conditions-text']}>{children}</p>
        </label>
        {error && <p className={s.error}>{error}</p>}
      </div>
    );
  }
);
