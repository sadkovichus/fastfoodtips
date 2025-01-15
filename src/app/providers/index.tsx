import { store } from '@app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DynamicMetaProvider } from './dynamicMetaProvider'

type Props = { children: ReactNode };

const queryClient = new QueryClient();

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <DynamicMetaProvider>{children}</DynamicMetaProvider>
      </Provider>
    </QueryClientProvider>
  );
};
