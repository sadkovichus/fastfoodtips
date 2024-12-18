import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

type Props = { children: ReactNode };

export const Providers = ({ children }: Props) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};
