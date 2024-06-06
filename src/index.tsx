import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";

ReactDOM.createRoot(
  document.getElementById("root") as ReactDOM.Container,
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
