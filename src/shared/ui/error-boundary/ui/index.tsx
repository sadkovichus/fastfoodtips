import { FC, PropsWithChildren } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../lib/ErrorFallback';

export const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.href = '/';
      }}>
      {children}
    </ReactErrorBoundary>
  );
};
