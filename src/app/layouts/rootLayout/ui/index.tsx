import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { getHelmetConfig } from '../model/helmet-config';

export const RootLayout = () => {
  const location = useLocation();
  const locationPath = location.pathname === '/auth' ? location.pathname + location.search : location.pathname;
  const helmetConfig = getHelmetConfig(locationPath, 'en');

  return (
    <>
      <Helmet>
        <title>{helmetConfig.title}</title>
        <meta content={helmetConfig.description} name='description' />
        <meta content={helmetConfig.ogTitle} property='og:title' />
        <meta content={helmetConfig.ogDescription} property='og:description' />
        <meta content={helmetConfig.ogImage} property='og:image' />
        <meta content={helmetConfig.ogUrl} property='og:url' />
      </Helmet>
      <Outlet />
    </>
  );
};
