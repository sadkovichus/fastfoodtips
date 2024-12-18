import { RootLayout } from '@app/layouts'
import { PathNames } from '@shared/config'
import { RouteObject } from 'react-router-dom'

export const router: RouteObject[] = [
  {
    path: PathNames.root,
    element: <RootLayout />,
    children: [
			{
				index: true,
				element: <p>main layout</p>
			},
			{
				path: PathNames.auth,
				element: <p>Auth page</p>
			}
		]
  },
  //? 404 page ↓
  {
    path: '*',
    element: <p>Not found page</p>,
  },
];
