import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ServiceCard from "../Compunents/ServiceCard";

const ServiceDetails = () => {
    const [dataDetails,setDataDetails] = useState([])
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData()
  console.log(data);
  useEffect(()=>{
    const dataFind= data.find(data=>data.serviceId==id)
    console.log(dataFind);
    setDataDetails(dataFind)
  },[id,data])
  return <div>
    <ServiceCard dataDetails={dataDetails}></ServiceCard>
  </div>;
};

export default ServiceDetails;
