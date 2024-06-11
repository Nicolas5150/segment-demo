import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};

/**
 * Error component to display when a route error occurs.
 * @returns {JSX.Element} - The rendered component.
 */
export function Error(): JSX.Element {
  const error = useRouteError() as RouteError;
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
