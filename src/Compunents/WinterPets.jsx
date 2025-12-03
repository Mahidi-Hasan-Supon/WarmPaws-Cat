import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import { BeatLoader } from "react-spinners";

const winterPetPromise = fetch("/winterTips.json").then((res) => res.json());
const WinterPets = () => {
  const {loading}= use(AuthContext)
  if(loading){
    return <BeatLoader></BeatLoader>
  }
  const winterPets = use(winterPetPromise);
  console.log(winterPets);
  return (

    <div className="grid  md:grid-cols-3 mt-5 gap-10">
      {winterPets.map((winterPet) => (
        <div className="flex bg-amber-100/50 h-[250px] w-[370px] rounded-2xl gap-2 shadow-xl hover:shadow-2xl  p-5">
          <div>
            <img src={winterPet.image} className="h-[200px]  w-[400px]" alt="" />
          </div>
          <div className="my-7">
            <h2 className="text-xl font-bold">"{winterPet.title}"</h2>
            <p className="text-xl font-semibold">{winterPet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WinterPets;
