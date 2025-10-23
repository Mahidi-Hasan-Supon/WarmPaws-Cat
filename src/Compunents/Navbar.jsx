import React, { use } from "react";
import { Link, NavLink } from "react-router";
import petImg from "../assets/winterPet.jpg";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import userImg from "../assets/user.png";
import { LoaderIcon } from "react-hot-toast";
import Loading from "./Loading";
import { RiseLoader } from "react-spinners";
const Navbar = () => {
  const { user, signOutFunc, setUser, loading } = use(AuthContext);
  console.log(user);
  const links = (
    <div className="flex text-lg font-bold">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/myProfile">My Profile</NavLink>
      </li>
    </div>
  );
  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast("SignOut Successfull");
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
        toast(e.message);
      });
  };
  /**
   *  <img src={`${ user ? user.photoURL : userImg}`} alt="" />
        {
          user?<button onClick={handleLogOut} className="btn btn-primary">Login out</button>:<Link to='/auth/login' className="btn btn-primary">Login</Link>
        }
  */
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="md:ml-8 flex items-center">
          <img
            src={petImg}
            className="h-[20px] w-[20px] rounded-md"
            alt="winterPet"
          />
          <h2 className="ml-2 text-xl font-semibold opacity-70">Pet Care</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {loading ? (
       <p className="md:ml-50"> <RiseLoader></RiseLoader></p>
      ) : (
        <div className="navbar-end md:mr-8 gap-5">
          <img
            src={`${user ? user.photoURL : userImg}`}
            className="rounded-2xl h-[40px] w-[40px]"
            alt=""
          />
          <div className="md:mr-50 space-x-5 gap-5">
            {user ? (
              <button onClick={handleSignOut} className="btn btn-primary">
                Login out
              </button>
            ) : (
              <Link
                to="/signUp"
                className="btn font-bold bg-pink-500 text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
