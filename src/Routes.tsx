import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '@/components/ErrorPage';

import Home from '@/pages/Home';
import Draw from '@/pages/Draw';
import Editor from '@/pages/Editor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/draw',
        element: <Draw />,
      },
      {
        path: '/editor',
        element: <Editor />,
      },
    ],
  },
]);

function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
