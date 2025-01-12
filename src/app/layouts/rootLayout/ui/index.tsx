import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { generateMetaTags } from '../model/page-helmet-data';

export const RootLayout = () => {
  const location = useLocation();
  const pathanme = location.pathname[location.pathname.length - 1] === '/' ? location.pathname.slice(0, -1) : location.pathname 
  const metaTags = generateMetaTags(pathanme || '/');

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta charSet={metaTags.meta.charset} />
        <meta name='viewport' content={metaTags.meta.viewport} />
        <meta name='description' content={metaTags.meta.description} />
        <meta property='og:title' content={metaTags.meta['og:title']} />
        <meta property='og:description' content={metaTags.meta['og:description']} />
        <meta property='og:url' content={metaTags.meta['og:url']} />
        <meta property='og:image' content={metaTags.meta['og:image']} />
        <meta property='og:type' content={metaTags.meta['og:type']} />
        <meta name='twitter:card' content={metaTags.meta['twitter:card']} />
        <meta name='twitter:title' content={metaTags.meta['twitter:title']} />
        <meta name='twitter:description' content={metaTags.meta['twitter:description']} />
        <meta name='twitter:image' content={metaTags.meta['twitter:image']} />
        <link rel='icon' href={metaTags.link[0].href} />
        <script type='application/ld+json'>{metaTags.script[0].innerHTML}</script>
      </Helmet>
      <Outlet />
    </>
  );
};
