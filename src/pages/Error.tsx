import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import notFoundImg from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center flex-col min-h-screen justify-center">
      {isRouteErrorResponse(error) ? (
        <>
          <img className="w-96" src={notFoundImg} alt="page not found" />
          <h1 className="lg:text-4xl sm: text-2xl mt-12">
            Ohhh! Page Not Found
          </h1>
          <p className="mt-4">It seems you have taken a wrong turn.</p>
        </>
      ) : (
        <h1>Unexpected error occured</h1>
      )}

      <Link to="/" className="text-[#9781FA] underline">
        go to home
      </Link>
    </div>
  );
};

export default Error;
