import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TripsList } from "./components/TripsList";
import { TripDetails } from "./components/tripDetails/TripDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TripsList />,
  },
  {
    path: "/trip",
    element: <TripDetails />,
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
