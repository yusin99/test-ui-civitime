import React from "react";
import "../App.css";
import Woman from "../assets/woman.svg";
import Man from "../assets/man.svg";
function Avatars(props) {
  return (
    <>
      <div id="question">
        <h3>Lequel de ces deux avatars préférez-vous ?</h3>
      </div>
      <div id="photos-container">
        <img src={Man} alt="" />
        <img src={Woman} alt="" />
      </div>
    </>
  );
}

export default Avatars;
