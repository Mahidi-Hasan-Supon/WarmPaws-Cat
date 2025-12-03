import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Error = () => {
  return (
    <div className="w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="text-center py-80">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
