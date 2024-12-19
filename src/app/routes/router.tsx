import { AuthLayout, RootLayout } from '@app/layouts';
import { MainLayout } from '@app/layouts/mainLayout';
import { Login } from '@pages/auth';
import { Create } from '@pages/auth/create/ui/Create';
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
            element: <p>Home</p>,
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
            element: <p>verify</p>,
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
