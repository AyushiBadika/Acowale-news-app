import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
