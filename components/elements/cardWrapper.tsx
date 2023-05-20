import React from "react";

const CarWrapper = ({ children }) => {
  return (
    <div>
      <div className="border border-slate-800 text-slate-500 rounded-md p-6 w-full">
        {children}
      </div>
    </div>
  );
};

export default CarWrapper;
