import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import CustomizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Hassle-Free Travel Arrangements",
    desc: "Leave the logistics to us! We take care of all the nitty-gritty details, including flight bookings, hotel reservations, visa assistance, and transportation arrangements",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Leave the logistics to us! We take care of all the nitty-gritty details, including flight bookings, hotel reservations, visa assistance, and transportation arrangements",
  },
  {
    imgUrl: CustomizationImg,
    title: "Customer Support",
    desc: "Leave the logistics to us! We take care of all the nitty-gritty details, including flight bookings, hotel reservations, visa assistance, and transportation arrangements",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
