import React from "react";
import PetCare from "../Compunents/PetCare";
import Slider from "../Compunents/Slider";
import WinterPets from "../Compunents/WinterPets";
import PetTips from "../Compunents/PetTips";
import 'animate.css';

const Home = () => {
  return (
    <div className="md:w-11/12 md:mx-auto my-10">
      <Slider></Slider>
      <PetCare></PetCare>
      <section className="my-10">
        <div>
          <h2 className="text-xl font-bold text-center animate__animated animate__bounce">
            Winter Care Tips for Pets
          </h2>
          <WinterPets></WinterPets>
        </div>

        <div className="my-10">
            <h2 className="text-xl font-bold text-center">Meet Our Expert Vets</h2>
          <PetTips></PetTips>
        </div>
      </section>
    </div>
  );
};

export default Home;
