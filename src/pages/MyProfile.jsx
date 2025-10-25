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
    <div className="bg-[#FF900E10] py-50">

    <div className="card w-96 bg-white py-10 mx-auto  shadow-sm ">
      <div className="card-body">
        <img src={user?.photoURL} className="rounded-4xl ml-40 h-[40px] w-[40px]" alt="" />
        <h2 className="card-title text-center font-bold ml-20">{user?.displayName}</h2>
        <p className="text-center text-2xl">{user?.email}</p>
        <div className="text-center flex items-center justify-between">
          <button className="btn text-amber-50 bg-linear-to-r from-[#FF8938] to-[#FF0000] w-full" onClick={()=>navigate('/updateProfile')}>Update Profile</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
