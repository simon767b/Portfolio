import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

export default function Contact() {
  return (
    <div className="contact kasse">
      <div className="flex-row">
        <h4>Have some questions?</h4>
        <Link to="/contact">
          <img src="./ArrowBeige.svg" alt="Pil" />
        </Link>
      </div>
      <h1>
        Contact <span className="contactSpan">me</span>
      </h1>
    </div>
  );
}
