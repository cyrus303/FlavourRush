import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Error from './components/Error/Error.jsx';
import ResturantBody from './components/Body/ResturantBody.jsx';
import ResturantMenu from './components/ResturantMenu/ResturantMenu.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ResturantBody />,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resturant/:resId',
        element: <ResturantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
