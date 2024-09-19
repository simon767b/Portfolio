import React from "react";
import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <div className="bio kasse">
      <div className="flex-row">
        <h1>About</h1>
        <Link to="/about">
          <img src="./ArrowBlack.svg" alt="Pil" />
        </Link>
      </div>
      <img src="./book.svg" alt="illustration" />
      <p className="mobil-text">
        Jeg elsker at udvikle mig og skabe brugervenlige, visuelt tiltalende
        digitale løsninger.
      </p>
    </div>
  );
}
