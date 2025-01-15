import { store } from '@app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DynamicMetaProvider } from './dynamicMetaProvider';
import { HelmetProvider } from 'react-helmet-async';

type Props = { children: ReactNode };

const queryClient = new QueryClient();

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <DynamicMetaProvider>
          <HelmetProvider>{children}</HelmetProvider>
        </DynamicMetaProvider>
      </Provider>
    </QueryClientProvider>
  );
};
