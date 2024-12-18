import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './router'

const routes = createBrowserRouter(router);

export const AppRouting = () => {
	return <RouterProvider router={routes} />
}