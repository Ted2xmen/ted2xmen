import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div className="mt-8">
      <h1 className="text-xl">{title}</h1>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
