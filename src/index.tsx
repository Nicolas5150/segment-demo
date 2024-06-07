import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { browserRouter } from "src/router/browserRouter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(
  document.getElementById("root") as ReactDOM.Container,
).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>,
);
