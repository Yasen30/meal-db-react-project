import React from "react";
import NavBar from "../NavBar/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="text-center my-36">
        <h1 className="text-7xl">
          <span className="text-blue-800">404</span> Not Found
        </h1>
      </div>
    </>
  );
};

export default NotFound;
