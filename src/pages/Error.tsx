import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error) ? (
        <>
          <h1>404</h1>
          <h3>Page Not Found</h3>
        </>
      ) : (
        <h1>Unexpected error occured</h1>
      )}

      <Link to="/">go to home</Link>
    </div>
  );
};

export default Error;
