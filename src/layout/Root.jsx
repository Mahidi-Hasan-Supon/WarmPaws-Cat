import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../Compunents/Navbar";
import Footer from "../Compunents/Footer";
import { AuthContext } from "../context/AuthContext";
import Loading from "../Compunents/Loading";

const Root = () => {
  const {loading} = use(AuthContext)
  return (
    <div className="md:w-7xl mx-auto">
      <Navbar></Navbar>
      {loading?<div>
         <Loading></Loading>
      </div>
      :
     <div className="bg-[url('/pet.png')] ">
       <Outlet></Outlet>
     </div>
      }
      <Footer></Footer>
    </div>
  );
};

export default Root;
