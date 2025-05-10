import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import Orders from './pages/orders';
import Products from './pages/product';
import Categories from './pages/categories';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/orders', element: <Orders /> },
  { path: '/products', element: <Products /> },
  { path: '/categories', element: <Categories /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
