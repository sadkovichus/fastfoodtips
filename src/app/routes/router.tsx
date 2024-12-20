import { AuthLayout, RootLayout } from '@app/layouts';
import { MainLayout } from '@app/layouts/mainLayout';
import { Login } from '@pages/auth';
import { Create } from '@pages/auth/create/ui/Create';
import { Verify } from '@pages/auth/verify/ui/Verify';
import { Home } from '@pages/home';
import { Pay } from '@pages/pay';
import { PathNames } from '@shared/config';
import { RouteObject } from 'react-router-dom';

export const router: RouteObject[] = [
  {
    path: PathNames.root,
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: PathNames.pay,
            element: <Pay />,
          },
          {
            path: PathNames.settings,
            element: <p>Settings page</p>,
          },
          {
            path: PathNames.myLink,
            element: <p>My link page</p>,
          },
        ],
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
    ],
  },
  //? 404 page ↓
  {
    path: '*',
    element: <p>Not found page</p>,
  },
];
