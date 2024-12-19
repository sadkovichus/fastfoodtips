import { store } from '@app/store'
import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

type Props = { children: ReactNode };

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <HelmetProvider>{children}</HelmetProvider>
    </Provider>
  );
};
