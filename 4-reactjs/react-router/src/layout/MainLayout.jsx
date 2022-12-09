import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <div>Header</div>
        <Outlet />
      <div>Footer</div>
    </main>
  );
};

export default MainLayout
