import React, { use } from "react";

const petPromise = fetch("/services.json").then((res) => res.json());

const PetCare = () => {
  const pets = use(petPromise);
  console.log(pets);
  return (
    <div className="m-5 md:w-5xl mx-auto">
      <h2 className="text-xl font-bold md:text-center my-2">Pets</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {pets.map((pet) => (
          <div className="border border-white w-[300px] shadow p-3 rounded-2xl ">
            <div className="space-y-3">
              <img src={pet.image} className="w-[300px] object-cover rounded-xl h-[300px]" alt="" />

              <h1 className="text-md font-bold text-center">{pet.serviceName}</h1>
              <div className="flex justify-between">
                <h1 className="font-semibold">Rating: {pet.rating}</h1>
              <h1 className="font-semibold">Price: ${pet.price}</h1>
              </div>
              <button className="btn w-full btn-secondary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCare;
