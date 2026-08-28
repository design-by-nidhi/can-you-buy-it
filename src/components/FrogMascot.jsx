import React from "react";
import frogMascot from "../assets/frog_mascot.png";
import frogApproved from "../assets/frog_approved.png";
import frogWorried from "../assets/frog_worried.png";
import frogDenied from "../assets/frog_denied.png";

export default function FrogMascot({ mood = "thinking", size = 90, className = "", style = {} }) {
  let img = frogMascot;
  if (mood === "approved") {
    img = frogApproved;
  } else if (mood === "risky") {
    img = frogWorried;
  } else if (mood === "denied") {
    img = frogDenied;
  }

  return (
    <img
      src={img}
      alt="Milo Mascot"
      className={className}
      style={{
        width: `${size}px`,
        height: "auto",
        display: "block",
        objectFit: "contain",
        ...style
      }}
    />
  );
}
