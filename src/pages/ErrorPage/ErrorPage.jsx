import { Helmet } from "react-helmet";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16  text-gray-900">
      <Helmet>
        <title>ActionCon | 404</title>
      </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-xs text-center">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61lO1Gn6WNL._AC_UL600_SR600,600_.jpg"
              alt=""
            />
          </div>
          <h2 className="mb-8 font-semibold text-4xl text-red-400">
            <span className="font-semibold">Ow, Snap!</span>
            <span className="sr-only">Error</span> {status || 404}!
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="btn btn-outline px-8 py-3 font-semibold rounded-2xl border-error text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
