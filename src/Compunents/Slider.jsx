import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="carousel carousel-center md:w-full h-[400px] bg-amber-100/30  rounded-box space-x-4 p-4">
        <Marquee className="space-y-4" pauseOnHover={false}  speed={50}>

      <div className="carousel-item mr-5">
        <img
          src="https://i.ibb.co.com/LXbPKNQ3/cute-white-chihuahua-with-sweater.jpg"
          className="rounded-box h-[300px]"
          />
      </div>
      <div className="carousel-item mr-5">
        <img
          src="https://i.ibb.co.com/JjDJt63Z/images-1.jpg"
          className="rounded-box h-[300px]"
          />
      </div>
      <div className="carousel-item mr-5">
        <img
          src="https://i.ibb.co.com/9k7J1hKz/cartoon-like-possum-illustration.jpg"
          className="rounded-box h-[300px]"
          />
      </div>
      <div className="carousel-item mr-5">
        <img
          src="https://i.ibb.co.com/vC5ZYLB7/happy-veterinarian-woman-using-stethoscope-listen-heart-cute-beagle-dog-caucasian-vet-hispanic-man-e.jpg"
          className="rounded-box h-[300px]"
          />
      </div>
      <div className="carousel-item mr-5">
        <img
          src="https://i.ibb.co.com/rGHsRddB/vecteezy-photo-of-small-pedigree-dog-lies-in-comfortable-bed-under-8837171.jpg"
          className="rounded-box h-[300px]"
          />
      </div>
      <div className="carousel-item mr-5">
        <img
          src="https://i.ibb.co.com/HLybtRkQ/dog-playing-with-kid-snow-with-family.jpg"
          className="rounded-box h-[300px]"
          />
      </div>
          </Marquee>
    </div>
  );
};

export default Slider;
