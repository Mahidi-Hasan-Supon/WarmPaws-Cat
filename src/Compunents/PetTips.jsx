import React, { use } from "react";

const petTipsPromise = fetch("/petTips.json").then((res) => res.json());
const PetTips = () => {
  const petTips = use(petTipsPromise);
  console.log(petTips);
  return (
    <div className="gap-5 grid md:grid-cols-2  mt-5">
      {petTips.map((petTip) => (
        <div className="bg-white gap-10 p-5 hover:shadow-2xl  rounded-2xl md:w-[500px] text-center">

        <div className="space-y-3">
            <span>{petTip.stars}</span>
           <p className="text-xl font-semibold">{petTip.description}</p>
          <img src={petTip.photo} className="rounded-2xl h-[40px] w-[40px] ml-50" alt="" /> 
          <h2 className="text-xl font-bold">{petTip.name}</h2> 
        </div>
        </div>
      ))}
    </div>
  );
};

export default PetTips;
