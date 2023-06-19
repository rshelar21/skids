import React from "react";
import DisplayCards from "../components/DisplayCards";
import UserForm from "../components/Form/UserForm";

const Home = () => {
  return (
    <>
      <div className="relative top-12 w-full">
        <div className="relative flex px-4 md:px-10 md:space-x-4 flex-col-reverse md:flex-row">
          <DisplayCards />
          <UserForm />
        </div>
      </div>
    </>
  );
};

export default Home;
