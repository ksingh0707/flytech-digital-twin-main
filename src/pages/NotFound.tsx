import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
          Site Under Construction
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          We are working hard to bring you an amazing experience. Please check back soon!
        </p>
        <a
          href="/"
          className="inline-block bg-tech-primary hover:bg-tech-secondary text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
