import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/Homepage";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Accomodations from "../Pages/Accomodations";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/appartements/:id",
    element: <Accomodations />,
  },
  {
    path: "/404",
    element: <Error />,
  },
];

const router = createBrowserRouter(routes);

export default router;