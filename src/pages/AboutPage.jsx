import React from "react";
import data from "../dataAbout.jsx";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  const [curentAbout, setCurentAbout] = useState(0);

  const changeCurentAbout = (event) => {
    if (event.target.innerText === "Mig") {
      setCurentAbout(0);
    } else if (event.target.innerText === "Uddannelse") {
      setCurentAbout(1);
    } else if (event.target.innerText === "Kompetencer") {
      setCurentAbout(2);
    } else {
      setCurentAbout(3);
    }
  };
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta
          name="description"
          content="This is the home page of my portfolio."
        />
      </Helmet>

      <div className="main-indhold-wrapper">
        <h1>{data[curentAbout].title}</h1>
        <img
          src="./Profilbillede.jpg"
          alt="about billede"
          className="about-billede"
        />

        <a
          href="https://res.cloudinary.com/do9tuulrz/image/upload/v1725470533/attachments/ko65kluwfyqg8eukhfrg.pdf"
          className="project-btn"
        >
          Gå til CV
        </a>
        <p className="underside-text">{data[curentAbout].text}</p>
      </div>

      <div className="mini-vesntre-wrapper">
        <div className="mini-vesntre-liste">
          <p onClick={changeCurentAbout}>Mig</p>
          <p onClick={changeCurentAbout}>Uddannelse</p>
          <p onClick={changeCurentAbout}>Kompetencer</p>
          <p onClick={changeCurentAbout}>Fremtiden</p>
        </div>
      </div>

      <div className="mini-hoejre-wrapper center">
        <img
          src={data[curentAbout].box.image}
          alt="Billede af kort"
          className="image-About-small"
        />
      </div>
    </>
  );
}
