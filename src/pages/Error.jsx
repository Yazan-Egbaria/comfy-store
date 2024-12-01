import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="text-center">
          <span className="text-primary text-9xl font-bold">404</span>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Page not found!
          </h1>
          <p className="mt-6 text-lg">
            Sorry, we couldn't find the page you were looking for.
          </p>

          <div>
            <Link to="/" className="btn btn-secondary mt-10">
              Go To Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen place-items-center">
      <h1 className="text-3xl font-bold sm:text-5xl">There was an error!</h1>
    </div>
  );
};

export default Error;
