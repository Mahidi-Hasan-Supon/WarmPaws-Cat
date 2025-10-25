import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import userImg from "../assets/user.png";
import { LoaderIcon } from "react-hot-toast";
import Loading from "./Loading";
import { BeatLoader, RiseLoader } from "react-spinners";
import petImg from "../assets/pet.png";
import "animate.css";

const Navbar = () => {
  const { user, signOutFunc, setUser, loading } = use(AuthContext);

  const links = (
    <div className="flex text-lg font-bold animate__animated animate__bounce">
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
    <div className="navbar bg-[#fff3e0] shadow-xl">
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
        <div className="md:ml-10 flex items-center">
          <img
            src={petImg}
            className="h-[40px] w-[40px] rounded-lg"
            alt="winterPet"
          />
          <h2 className="ml-2 text-xl font-semibold opacity-70">WarmPaws</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {loading ? (
        <p className="md:ml-100 ml-30">
          {" "}
          <BeatLoader></BeatLoader>
        </p>
      ) : (
        <div className="navbar-end md:mr-8 flex items-center gap-5">
          {user ? (
            <>
              {/*Avatar with hover tooltip */}
              <div className="relative group cursor-pointer">
                <img
                  src={user.photoURL}
                  className="rounded-full h-[45px] w-[45px] border-2 border-pink-400"
                  alt="User Avatar"
                />
                {/* Hover এ displayName */}
                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap shadow-lg">
                  {user.displayName || "No Name"}
                </div>
              </div>

              <button
                onClick={handleSignOut}
                className="btn bg-linear-to-r from-[#FF8938] to-[#FF0000] text-white font-bold border-none hover:bg-pink-600"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="flex gap-4">
              <img src={userImg} alt="" />
              <Link
                to="/signUp"
                className="btn font-bold bg-pink-500 text-white"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
