import React, { use, useEffect, useState } from "react";
import {
  useLoaderData,
  useParams,
} from "react-router";
import ServiceCard from "../Compunents/ServiceCard";
import { AuthContext } from "../context/AuthContext";

const ServiceDetails = () => {
  const { loading } = use(AuthContext);
  const [dataDetails, setDataDetails] = useState([]);
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const dataFind = data.find((data) => data.serviceId == id);
    console.log(dataFind);
    setDataDetails(dataFind);
  }, [id, data]);
  if (loading) {
    return <BeatLoader></BeatLoader>;
  }
  return (
    <div>
      <ServiceCard dataDetails={dataDetails}></ServiceCard>
    </div>
  );
};

export default ServiceDetails;
