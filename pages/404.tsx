import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-blue-400">404</h1>
      <h2 className="text-3xl font-semibold mt-4 mb-8">Page Not Found</h2>
      <p className="text-lg text-slate-300 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Go back home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
