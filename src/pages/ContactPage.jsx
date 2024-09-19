import React from "react";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta
          name="description"
          content="This is the contact page of my portfolio."
        />
      </Helmet>

      <div className="main-indhold-wrapper contact-page-color">
        <h1>
          Contact <span className="contactSpan">me</span>
        </h1>
        <div>
          <h3>Have some questions?</h3>
          <p>
            I would love to get in contact, so if you want to talk or write with
            me, just use the links below.
          </p>
        </div>

        <div className="call-container">
          <a href="mailto:simon767b@gmail.com">
            <div className="flex-row">
              <p>E-mail:</p>
              <img src="./e-mail.svg" alt="ikon af e-mail" />
            </div>
            <p>simon767b@gmail.com</p>
          </a>

          <a href="tel:+45 30222617">
            <div className="flex-row">
              <p>Phone:</p>
              <img src="./Phone.svg" alt="ikon af telefon" />
            </div>
            <p>+45 30222617</p>
          </a>
        </div>
      </div>

      <div className="mini-vesntre-wrapper contact-page-color">
        <img
          src="./Profilbillede.jpg"
          alt="billede af mig"
          className="contact-venstre-image"
        />
      </div>

      <div className="mini-hoejre-wrapper contact-page-color">
        <div>
          <h3>So-Me</h3>
          <div>
            <div className="button-wrapper">
              <a
                target="_blank"
                href="https://www.facebook.com/simon.petersen.5249/"
              >
                <img
                  src="./facebook.svg"
                  alt="sociale-medie-knapper"
                  className="so-me-buttons"
                />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/picante_cucumber/"
              >
                <img
                  src="./instagram.svg"
                  alt="sociale-medie-knapper"
                  className="so-me-buttons"
                />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/simon-petersen-80379728b/"
              >
                <img
                  src="./linkedIn.svg"
                  alt="sociale-medie-knapper"
                  className="so-me-buttons"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
