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



import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const servicePromice = fetch("/services.json").then((res) => res.json());
const Slider = () => {
  const services = use(servicePromice);
  console.log(services);
  return (
    <div className="md:w-full h-[450px] rounded-box py-10">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[400px] rounded-box"
      >
        {services.map((item) => (
          <SwiperSlide key={item.serviceId}>
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              {/* Image */}
              <img
                src={item.image}
                alt={item.serviceName}
                className="w-full h-full object-cover"
              />

              {/* Text overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg">
                  {item.serviceName}
                </h3>
                <p className="text-sm drop-shadow-md">{item.category}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
