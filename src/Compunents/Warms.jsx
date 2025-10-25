import React from "react";
import { FaHeart, FaShieldAlt, FaSnowflake, FaUserMd } from "react-icons/fa";

const Warms = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold ">
          {" "}
          Why Choose <span className="text-orange-400">WarmPaws</span>?
        </h1>
        <p className="text-md font-semibold opacity-60 text-center my-3">This winter, keep your pets warm, safe, and happy.  
        Here’s why pet owners trust us with their furry friends</p>
      </div>
      <div className="text-center grid md:grid-cols-4 gap-3">
        <div className=" h-[200px] w-[300px] bg-white hover:shadow-2xl rounded-3xl p-5 transition  animate__animated animate__fadeInUp animate__delay-2s">
            <FaHeart className="text-5xl font-bold mx-auto text-orange-300 text-center"></FaHeart>
           <h1 className="text-xl font-semibold text-center ">Loving Care</h1>
           <p className="text-md opacity-60 text-center">Every pet is treated like family, with compassion and warmth.</p>
      </div>
        <div className=" h-[200px] w-[300px] bg-white hover:shadow-2xl rounded-3xl p-5 animate__animated animate__fadeInUp animate__delay-2s">
            <FaUserMd className="text-5xl font-bold mx-auto text-orange-300 text-center "></FaUserMd>
           <h1 className="text-xl font-semibold text-center">Trained Experts</h1>
           <p className="text-md opacity-60 text-center">Our team includes certified pet trainers and vet-approved caregivers.</p>
      </div>
        <div className=" h-[200px] w-[300px] bg-white hover:shadow-2xl rounded-3xl p-5 animate__animated animate__fadeInUp animate__delay-2s">
            <FaShieldAlt className="text-5xl font-bold mx-auto text-orange-300 text-center"></FaShieldAlt>
           <h1 className="text-xl font-semibold text-center">Safe Environment</h1>
           <p className="text-md opacity-60 text-center">We ensure a cozy, hygienic, and secure space for your pets.</p>
      </div>
        <div className=" h-[200px] w-[300px] bg-white hover:shadow-2xl rounded-3xl p-5 animate__animated animate__fadeInUp animate__delay-2s">
            <FaSnowflake className="text-5xl font-bold mx-auto text-orange-300 text-center"></FaSnowflake>
           <h1 className="text-xl font-semibold text-center">Winter Ready</h1>
           <p className="text-md opacity-60 text-center">From warm coats to heated spaces — we’re ready for the cold.</p>
      </div>
      
      </div>
    </div>


  );
};

export default Warms;


