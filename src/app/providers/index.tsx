import { store } from '@app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

type Props = { children: ReactNode };

const queryClient = new QueryClient();

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HelmetProvider>{children}</HelmetProvider>
      </Provider>
    </QueryClientProvider>
  );
};
