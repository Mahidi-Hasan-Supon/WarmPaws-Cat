import React, { use } from "react";
import { Link } from "react-router";
import 'animate.css'
import { FaStarHalfAlt } from "react-icons/fa";

const petPromise = fetch("/services.json").then((res) => res.json());

const PetCare = () => {
  const pets = use(petPromise);
  console.log(pets);
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold md:text-center py-5 mb-5 animate__animated animate__bounce">
        Pet Care in Winter
      </h2>
      <div className="grid md:grid-cols-4 gap-20  mr-8">
        {pets.map((pet) => (
          <div className="border border-white hover:shadow-2xl w-[270px] bg-white  shadow p-3 rounded-2xl ">
            <div className="space-y-3">
              <img
                src={pet.image}
                className="w-[300px] object-cover rounded-xl h-[300px]"
                alt=""
              />

              <h1 className="text-lg font-bold text-center opacity-70">
                {pet.serviceName}
              </h1>
              <div className="flex justify-between">
                <h1 className="font-semibold flex items-center gap-1">Rating: <FaStarHalfAlt className="h-[15px] text-orange-300"/>{pet.rating}</h1>
                <h1 className="font-semibold">Price: ${pet.price}</h1>
              </div>
              <Link
                to={`/service-details/${pet.serviceId}`}
                className="btn w-full  bg-linear-to-r from-[#FF8938] to-[#FF0000] text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCare;
