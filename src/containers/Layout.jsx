import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="bg-black">{children}</div>
    </div>
  );
};

export default Layout;
