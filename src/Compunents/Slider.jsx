// import React from "react";
// import Marquee from "react-fast-marquee";

// const Slider = () => {
//   return (
//     <div className="carousel carousel-center md:w-full h-[400px] bg-amber-100/30  rounded-box space-x-4 p-4">
//         <Marquee className="space-y-4" pauseOnHover={false}  speed={50}>

//       <div className="carousel-item mr-5">
//         <img
//           src="https://i.ibb.co.com/LXbPKNQ3/cute-white-chihuahua-with-sweater.jpg"
//           className="rounded-box h-[300px]"
//           />
//       </div>
//       <div className="carousel-item mr-5">
//         <img
//           src="https://i.ibb.co.com/JjDJt63Z/images-1.jpg"
//           className="rounded-box h-[300px]"
//           />
//       </div>
//       <div className="carousel-item mr-5">
//         <img
//           src="https://i.ibb.co.com/9k7J1hKz/cartoon-like-possum-illustration.jpg"
//           className="rounded-box h-[300px]"
//           />
//       </div>
//       <div className="carousel-item mr-5">
//         <img
//           src="https://i.ibb.co.com/vC5ZYLB7/happy-veterinarian-woman-using-stethoscope-listen-heart-cute-beagle-dog-caucasian-vet-hispanic-man-e.jpg"
//           className="rounded-box h-[300px]"
//           />
//       </div>
//       <div className="carousel-item mr-5">
//         <img
//           src="https://i.ibb.co.com/rGHsRddB/vecteezy-photo-of-small-pedigree-dog-lies-in-comfortable-bed-under-8837171.jpg"
//           className="rounded-box h-[300px]"
//           />
//       </div>
//       <div className="carousel-item mr-5">
//         <img
//           src="https://i.ibb.co.com/HLybtRkQ/dog-playing-with-kid-snow-with-family.jpg"
//           className="rounded-box h-[300px]"
//           />
//       </div>
//           </Marquee>
//     </div>
//   );
// };

// export default Slider;















import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const images = [
    "https://i.ibb.co.com/LXbPKNQ3/cute-white-chihuahua-with-sweater.jpg",
    "https://i.ibb.co.com/JjDJt63Z/images-1.jpg",
    "https://i.ibb.co.com/9k7J1hKz/cartoon-like-possum-illustration.jpg",
    "https://i.ibb.co.com/vC5ZYLB7/happy-veterinarian-woman-using-stethoscope-listen-heart-cute-beagle-dog-caucasian-vet-hispanic-man-e.jpg",
    "https://i.ibb.co.com/rGHsRddB/vecteezy-photo-of-small-pedigree-dog-lies-in-comfortable-bed-under-8837171.jpg",
    "https://i.ibb.co.com/HLybtRkQ/dog-playing-with-kid-snow-with-family.jpg",
  ];

  return (
    <div className="w-full md:w-4/5 mx-auto my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
