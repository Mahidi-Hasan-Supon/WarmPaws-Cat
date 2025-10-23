import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ServiceCard = ({ dataDetails }) => {
  const {
    category,
    description,
    image,
    rating,
    serviceName,
    slotsAvailable,
    providerEmail,
    providerName,
    price,
  } = dataDetails;
 const handleSubmit=(e)=>{
  e.preventDefault()
  const email =e.target.email.value
  const name =e.target.name.value
  console.log(email,name);
  if(email && name){
    toast.success('✅ Service booked successfully!')
    e.target.reset()
  }

 }
  return (
    <div className="my-5 md:flex md:w-2xl mx-auto gap-10">
      <div className="card bg-base-100 md:w-[600px] shadow-sm p-3.5">
        <figure>
          <img
            src={image}
            className="w-full h-[300px] object-cover rounded-xl"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {serviceName}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>{description}</p>
          <div className="grid md:grid-cols-2 space-y-3">
            <p className="">
              <span className="font-semibold">ProviderName:</span>{" "}
              <strong> {providerName}</strong>
            </p>
            <p className="">
              <span className="font-semibold">ProviderEmail:</span>{" "}
              <strong>{providerEmail}</strong>
            </p>
            <p className="">
              <span className="font-semibold">Category:</span>{" "}
              <strong>{category}</strong>
            </p>
            <p className="">
              <span className="font-semibold">Rating:</span> ⭐
              <strong>{rating}</strong>
            </p>
            <p className="">
              <span className="font-semibold">Price:</span>{" "}
              <strong>{price}</strong>
            </p>
            <p className="">
              <span className="font-semibold">SlotsAvailable:</span>{" "}
              <strong>{slotsAvailable}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="border-white w-[400px] rounded-2xl px-5 h-[300px] shadow-2xl text-center space-y-4 mt-35">
        <form onSubmit={handleSubmit} className="space-y-3 mt-10">
          <h2 className="text-xl font-bold">Book Service</h2>
          <label className="floating-label">
            <input type="text" placeholder="Name" name="name" className="input input-lg" />
         
          </label>
          <label className="floating-label">
            <input type="text" placeholder="Email" name="email" className="input input-lg" />
           
          </label>
          <button type="submit" className="btn btn-primary w-full mb-3">Book Now</button>
          
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ServiceCard;
