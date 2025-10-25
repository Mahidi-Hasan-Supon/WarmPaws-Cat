import React, { use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router";

const ForgetPassword = () => {
  const location = useLocation()
  const emailValue = location.state?.email || "";
    const {sendPasswordResetEmailFunc} = use(AuthContext)
    const [error,setError] = useState('')
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
     if(!email){
        return setError("Please enter your email address")
      }
    sendPasswordResetEmailFunc(email)
      .then(() => {
       setError("Reset email sent! Redirecting to Gmail...")
         window.open("https://mail.google.com",'_mail');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    
  };
  return (
    <div className="py-50 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <div className="card-body gap-5">
          <h1 className="text-center text-2xl font-bold">
            {" "}
            Reset Your Password
          </h1>
          <form onSubmit={handleResetPassword}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              defaultValue={emailValue}
              required
            />
            <div className="flex gap-2 mt-5">
              <button type="submit" className="btn btn-neutral w-full mt-4">
                Reset Password
              </button>
            </div>
          </form>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ForgetPassword;
