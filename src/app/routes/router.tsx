import { AuthLayout, RootLayout } from '@app/layouts';
import { MainLayout } from '@app/layouts/mainLayout';
import { ChangePasswordForm, SettingsForm } from '@features/settings';
import { Login } from '@pages/auth';
import { Create } from '@pages/auth/create/ui/Create';
import { Verify } from '@pages/auth/verify/ui/Verify';
import { Home } from '@pages/home';
import { LicensePage } from '@pages/license';
import { MyLink } from '@pages/may-link';
import { Pay } from '@pages/pay';
import { PayCode } from '@pages/pay-code';
import { Settings } from '@pages/settings';
import { PathNames } from '@shared/config';
import { ErrorBoundary } from '@shared/ui';
import { RouteObject } from 'react-router-dom';

export const router: RouteObject[] = [
  {
    path: PathNames.root,
    element: (
      <ErrorBoundary>
        <RootLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: PathNames.settings,
            element: <Settings />,
            children: [
              {
                index: true,
                element: <SettingsForm />,
              },
              {
                path: PathNames.changePassword,
                element: <ChangePasswordForm />,
              },
            ],
          },
          {
            path: PathNames.myLink,
            element: <MyLink />,
          },
          {
            path: PathNames.withdraw,
            element: <p>Withdraw</p>,
          }
        ],
      },
      {
        path: PathNames.pay,
        element: <Pay />,
      },
      {
        path: PathNames.pay + '/:id',
        element: <PayCode />,
      },
      {
        path: PathNames.auth,
        element: <AuthLayout />,
        children: [
          {
            path: PathNames.create,
            element: <Create />,
          },
          {
            index: true,
            element: <Login />,
          },
          {
            path: PathNames.verify,
            element: <Verify />,
          },
        ],
      },
      {
        path: PathNames.license,
        element: <LicensePage />,
      },
      {
        path: PathNames.authorInfo,
        element: <p>ИНН: 671100856969 Email: fastfood.tips2024@gmail.com Phone: +79671963181</p>,
      },
      //? 404 page ↓
      {
        path: '*',
        element: <p>Not found page</p>,
      },
    ],
  },
];
