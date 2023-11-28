import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Carousel from "./routes/Carousel.jsx";

const router = createBrowserRouter([
  {
    path: "/arthurs_library/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/arthurs_library/",
        element: <Home />
      },
      {
        path: "carousel",
        element: <Carousel />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
