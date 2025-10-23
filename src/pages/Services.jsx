import React from "react";
import { useLoaderData } from "react-router";
import PetCare from "../Compunents/PetCare";


const Services = () => {
  const loader = useLoaderData()
  console.log(loader);
  return <div>
    <PetCare></PetCare>
  </div>;
};

export default Services;
