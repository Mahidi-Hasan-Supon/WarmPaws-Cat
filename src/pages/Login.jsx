import React, { use, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);
  const {
    signInWithEmailAndPasswordFunc,
    setUser,
    signInWithPopupFunc,
  } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res.user);
        toast("Sign In successfully");
        setUser(res.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => {
        console.log(e.message);
        toast(e.message);
      });
  };

  const handleGoogle = () => {
    signInWithPopupFunc()
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => {
        console.log(e);
        toast(e.message);
      });
  };
  const handleForget = () => {
    const email = emailRef.current?.value;
    navigate("/auth/forgetPassword", { state: { email } });
    console.log(navigate);
  };
  return (
    <div className="py-20 flex justify-center items-center bg-[#FFF4E7] bg-[url('/paw.png')]">
      <div className="card bg-white w-full max-w-sm my-20 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center text-2xl font-bold">Login</h1>

          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                ref={emailRef}
              />
              <div className="relative">
                <label className="label">Password</label>

                <input
                  type={show ? "text" : "password"}
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-8 right-7"
                >
                  {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              <div>
                <button className="" onClick={handleForget}>
                  <a className="link link-hover">Forgot password?</a>
                </button>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              {/* Google */}
              <button
                onClick={handleGoogle}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
            <p className="font-semibold">
              Don't have an account? Please{" "}
              <Link className="text-red-500" to="/signUP">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
