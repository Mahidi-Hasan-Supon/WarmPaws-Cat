import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user, setuser } = use(AuthContext);
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <div className="card w-96 bg-base-100 py-3 mx-auto card-xl shadow-sm my-40">
      <div className="card-body">
        <img src={user?.photoURL} className="rounded-4xl " alt="" />
        <h2 className="card-title text-center">{user?.displayName}</h2>
        <p className="text-center">{user?.email}</p>
        <div className="text-center flex items-center justify-between">
          <button className="btn btn-primary w-full" onClick={()=>navigate('/updateProfile')}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
