import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

export default function Projects() {
  const [currentSrc, setCurrentSrc] = useState("./toejkrogen.jpeg");

  const triggerImg = (event) => {
    console.log(event.target.value);
    if (event.target.innerText === "Tøjkrogen") {
      setCurrentSrc("./toejkrogen.jpeg");
    } else if (event.target.innerText === "Steno Museum") {
      setCurrentSrc("./projects/armband.png");
    } else if (event.target.innerText === "SchweizerBageriet") {
      setCurrentSrc("./projects/bager.jpg");
    } else {
      setCurrentSrc("./projects/hjerteblad.jpg");
    }
  };

  return (
    <div className="projects kasse">
      <div className="flex-row">
        <h4>Projects</h4>
        <Link to="/projects">
          <img src="./ArrowBlack.svg" alt="pil" />
        </Link>
      </div>
      <img src={currentSrc} alt="pil" className="projectsHero" />
      <p className="mobil-text" onClick={triggerImg}>
        Tøjkrogen
      </p>
      <p className="mobil-text" onClick={triggerImg}>
        Steno Museum
      </p>
      <p className="mobil-text" onClick={triggerImg}>
        SchweizerBageriet
      </p>
      <p className="mobil-text" onClick={triggerImg}>
        Online Magasin
      </p>
    </div>
  );
}
