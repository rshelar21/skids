import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-white w-full z-10 fixed top-0 left-0 right-0">
        <div className="py-2 text-center shadow-md">
          <h1 className="text-blue-500 font-semibold text-xl">
            User Management
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
