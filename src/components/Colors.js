import React from "react";
import "../App.css";
import Color1 from "../assets/color-FCD7B8.svg";
import Color2 from "../assets/color-E0A39A.svg";
import Color3 from "../assets/color-FCCC84.svg";
import Color4 from "../assets/color-533724.svg";
import Color5 from "../assets/color-B2C7C7.svg";
import Color6 from "../assets/color-88C10F.svg";
import Color7 from "../assets/color-FF1414.svg";
import Color8 from "../assets/color-striped.svg";
import Skin from "../assets/skin.svg";
import Tshirt from "../assets/t-shirt.svg";

function Colors(props) {
  return (
    <>
      <div id="color-container">
        <div id="skin-color">
          <img src={Skin} alt="" />
          <img src={Color1} alt="" />
          <img src={Color2} alt="" />
          <img src={Color3} alt="" />
          <img src={Color4} alt="" />
        </div>
        <div id="t-shirt-color">
          <img src={Tshirt} alt="" />
          <img src={Color5} alt="" />
          <img src={Color6} alt="" />
          <img src={Color7} alt="" />
          <img src={Color8} alt="" />
        </div>
      </div>
    </>
  );
}

export default Colors;
