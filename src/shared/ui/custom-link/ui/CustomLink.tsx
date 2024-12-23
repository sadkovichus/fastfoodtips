import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  to: string;
  children: ReactNode;
	activeClassName?: string
};

export const CustomLink = ({ to, children, activeClassName }: Props) => {
  const location = useLocation();
	const [isActive, setIsActive] = useState(false);

  useEffect(() => {
		if (location.pathname === to) return setIsActive(true);
		setIsActive(false);
  }, [location]);

  return <Link to={to} className={isActive ? activeClassName : ''}>{children}</Link>;
};
