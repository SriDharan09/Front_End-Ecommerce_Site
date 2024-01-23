import React from "react";
import Header from "./header";
import Footer from "./footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* Layout component for header and footer */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
