import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="m-auto flex flex-col items-center">
        <h1 className="text-lg">Ой, страница не найдена!</h1>
        <Link to="/" className="">
          <p className="flex items-center justify-center mt-2 gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded-lg mb-4">
            На главную
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
