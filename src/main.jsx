import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";

import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ServicePageMaintance from "./pages/ServicePageMaintance.jsx";
import ServicePageCleaning from "./pages/ServicePageCleaning.jsx";
import ServicePagePmoc from "./pages/ServicePagePmoc.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/services/maintance",
        element: <ServicePageMaintance />
      }
      ,
      {
        path: "/services/cleaning",
        element: <ServicePageCleaning />
      }
      ,
      {
        path: "/services/pmoc",
        element: <ServicePagePmoc />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
