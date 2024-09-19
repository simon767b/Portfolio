import React from "react";
import data from "../dataProjects.jsx";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ProjectsPage() {
  const [project, setproject] = useState(0);

  const changeproject = (event) => {
    if (event.target.innerText === "Tøjkrogen") {
      setproject(0);
    } else if (event.target.innerText === "Steno") {
      setproject(1);
    } else if (event.target.innerText === "Mobile first") {
      setproject(2);
    } else {
      setproject(3);
    }
  };

  return (
    <>
      <Helmet>
        <title>Project Page</title>
        <meta
          name="description"
          content="This is the project page of my portfolio."
        />
      </Helmet>
      <div className="main-indhold-wrapper">
        <div className="flex-row">
          <h1>{data[project].title}</h1>
          <img
            className="project-logo"
            src={data[project].logo}
            alt="Billede af projektets logo"
          />
        </div>

        <img
          src={data[project].image}
          alt=""
          style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }}
          className="project-Heroimage"
        />
        <p className="underside-text">{data[project].text}</p>
        <a href={data[project].link} target="_blank" className="project-btn">
          Se Projekt
        </a>
      </div>

      <div className="mini-vesntre-wrapper">
        <div className="mini-vesntre-liste">
          <p onClick={changeproject}>Tøjkrogen</p>
          <p onClick={changeproject}>Steno</p>
          <p onClick={changeproject}>Mobile first</p>
          <p onClick={changeproject}>Magasin</p>
        </div>
      </div>

      <div className="mini-hoejre-wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4>Værktøjer</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space between",
              gap: "5px",
              flexWrap: "wrap",
            }}
          >
            {data[project].technologies.name.map((tool, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`./tools/${data[project].technologies.image[index]}.svg`}
                  alt={`${tool} ikon`}
                  className="project-image-icon large-image"
                />
                <p className="projects-tools large-text">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
