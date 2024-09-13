import React, { useState } from "react";

const Alert = ({ type, text }) => {
  // Estado para controlar la visibilidad de la alerta
  const [isVisible, setIsVisible] = useState(true);

  // Si la alerta no está visible, no se muestra nada
  if (!isVisible) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-sm px-4 z-50">
      <div
        className={`flex items-center justify-between p-4 border-l-4 rounded shadow-lg ${
          type === "danger"
            ? "bg-red-50 border-red-500 text-red-700"
            : "bg-blue-50 border-blue-500 text-blue-700"
        } transition-all duration-300 ease-in-out`}
        role="alert"
      >
        <div className="flex items-center">
          <span
            className={`inline-block w-4 h-4 mr-2 rounded-full ${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            }`}
          ></span>
          <p className="font-bold text-sm uppercase">
            {type === "danger" ? "Failed" : "Success"}
          </p>
        </div>
        <div className="flex-grow ml-2">
          <p className="text-sm">{text}</p>
        </div>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          aria-label="Close"
          onClick={() => setIsVisible(false)} // Al hacer clic, se oculta la alerta
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9l-4-4a1 1 0 011.414-1.414L10 6.586l2.586-2.586A1 1 0 0114 5l-4 4 4 4a1 1 0 01-1.414 1.414L10 11.414l-2.586 2.586A1 1 0 015 14l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
