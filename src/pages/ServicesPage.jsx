import React from "react";
import data from "../dataServices.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ServicesPage() {
  const [curentService, setCurentService] = useState(0);

  const changecurentService = (event) => {
    if (event.target.innerText === "Website") {
      setCurentService(0);
    } else if (event.target.innerText === "Branding") {
      setCurentService(1);
    } else if (event.target.innerText === "Content") {
      setCurentService(2);
    } else {
      setCurentService(3);
    }
  };
  return (
    <>
      <Helmet>
        <title>Services Page</title>
        <meta
          name="description"
          content="This is the services page of my portfolio."
        />
      </Helmet>

      <div className="main-indhold-wrapper">
        <h1>{data[curentService].title}</h1>
        <h2>{data[curentService].manchet}</h2>
        <img
          src={data[curentService].image}
          alt="billede af Simon Petersen"
          className="image-About"
        />
        <p className="underside-text">{data[curentService].text}</p>
        <p className="underside-text">
          Eksempler: {data[curentService].examples}
        </p>
      </div>

      <div className="mini-vesntre-wrapper">
        <div className="mini-vesntre-liste">
          <p onClick={changecurentService}>Website</p>
          <p onClick={changecurentService}>Branding</p>
          <p onClick={changecurentService}>Content</p>
          <p onClick={changecurentService}>Extra</p>
        </div>
      </div>

      <div className="mini-hoejre-wrapper">
        <div className="services_pris">
          <p className="large-text">Price</p>
          <p className="large-text">Fra {data[curentService].price} kr</p>
          <Link to={"/contact"} className="large-text">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
