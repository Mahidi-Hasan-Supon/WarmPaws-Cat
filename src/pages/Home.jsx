import React from "react";
import PetCare from "../Compunents/PetCare";
import Slider from "../Compunents/Slider";
import WinterPets from "../Compunents/WinterPets";
import PetTips from "../Compunents/PetTips";
import "animate.css";
import { FaHeart, FaShieldAlt, FaUserMd, FaSnowflake } from "react-icons/fa";
import Warms from "../Compunents/Warms";
import Testominals from "../Compunents/Testominals";

const Home = () => {
  return (
    <div className="bg-[#e6a6231a] bg-[url('/pet.png')]">
      <div className="md:w-11/12 md:mx-auto">
        <Slider></Slider>
        <PetCare></PetCare>
        <section className="py-10">
          <div className="">
            <h2 className="text-4xl font-bold text-center mb-5 animate__animated animate__bounce">
              Winter Care Tips for Pets
            </h2>
            <WinterPets></WinterPets>
          </div>

          <div className="my-10 mt-20">
            <h2 className="text-4xl font-bold text-center">
              Meet Our Expert Vets
            </h2>
            <PetTips></PetTips>
          </div>
        </section>
       <section className="mt-5 py-5">
        <Warms></Warms>
       </section>
       <section>
        <Testominals></Testominals>
       </section>
      </div>
    </div>
  );
};

export default Home;
