import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation()
  const [error, setError] = useState("");
  const [show, setShow] = useState("");
  const {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithPopupFunc,
    updateProfileFunc,
  } = use(AuthContext);
  const casePatten = /(?=.*[A-Z])/;
  const smallLetter = /(?=.*[a-z])/;
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    console.log(email, password, displayName, photoURL);
    if (!casePatten.test(password)) {
      setError("Password must contain at least one uppercase letter!");
    } else if (!smallLetter.test(password)) {
      setError("Password must contain at least one lowercase letter!");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
    } else {
      setError("");
    }
    if(user){
        navigate('')
    }
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res.user);
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            toast("Sign Up Successful");
            navigate(location.state ||'/')
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e.message);
        console.log(e.code);
        toast(e.message);
      });
  };
  const handleGoogle = () => {
    signInWithPopupFunc()
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        toast('Sign up successful')
        navigate(location.state ||'/')
      })
      .catch((e) => {
        console.log(e);
        toast(e.message);
      });
  };
  return (
    <div className="py-20 flex justify-center items-center bg-[#FFF4E7]">
      <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center text-2xl font-bold">Resgister</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label"> Photo-URL</label>
              <input
                type="photo"
                name="photo"
                className="input"
                placeholder=" Photo-URL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
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
              <p className="text-red-500">{error}</p>
              {/* <div>
                <a className="link link-hover">Forgot password?</a>
              </div> */}
              <button type="submit" className="btn btn-neutral mt-4">
                Register
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
              Already have an account? Please{" "}
              <Link className="text-red-500" to="/login">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;
