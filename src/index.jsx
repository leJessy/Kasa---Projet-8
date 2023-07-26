import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './Pages/Homepage';
import About from './Pages/About';
import Error from './Pages/Error';
import Accomodations from './Pages/Accomodations';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/appartements",
    element: <Accomodations />
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

