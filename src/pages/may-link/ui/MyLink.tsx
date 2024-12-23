import { Link } from 'react-router-dom';
import s from './MyLink.module.scss';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { PathNames } from '@shared/config'

export const MyLink = () => {
  const user = useAppSelector(state => state.authReducer);
  const [copiedDone, setCopiedDone] = useState({ type: false, text: '' });
	const link = PathNames.pay + '/' + user.id?.toString();
  const publicLink = import.meta.env.VITE_WEBSITE_URL + link

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(publicLink);
      setCopiedDone({ type: true, text: 'Ссылка скопирована!' });
    } catch (err) {
      setCopiedDone({ type: false, text: 'Ссылка не была скопирована!' });
    }
  };

  return (
    <div className={s['my-link']}>
      <h1 className={s.title}>Ваш QR код для получения чаевых</h1>
      <div className={s.content}>
        <div onClick={copyTextToClipboard} className={s['copy-link']}>
          <div className={s.copy}>
            {publicLink}
            {copiedDone.text && <p className={s[copiedDone.type ? 'done' : 'error']}>{copiedDone.text}</p>}
          </div>
        </div>
        <div className={s.bottom}>
          <Link className={s.link} to={link}>
            <QRCodeSVG bgColor='#2b2738' fgColor='white' value={import.meta.env.VITE_WEBSITE_URL + link} className={s.qrcode} />
          </Link>
          <p className={s.code}>{user.id?.toString()}</p>
        </div>
      </div>
    </div>
  );
};
