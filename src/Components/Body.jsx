import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Head */}
      <div className="sticky top-0 z-50">
        <Head />
      </div>

      {/* Main content section */}
      <div className="flex flex-row flex-1">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
