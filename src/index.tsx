import { Container, createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { browserRouter } from "src/router/browserRouter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

declare global {
  interface Window {
    analytics: unknown;
  }
}

function App() {
  return <RouterProvider router={browserRouter} />;
}

createRoot(document.getElementById("root") as Container).render(<App />);
