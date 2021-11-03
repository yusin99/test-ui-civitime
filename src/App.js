import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Avatars from "./components/Avatars";
import Colors from "./components/Colors";
import Button from "./components/Button";

const App = () => {
  return (
    <div id="temp-style">
      <div id="container">
        <Navbar />
        <div id="content">
          <Avatars />
          <div id="separator"></div>
          <Colors />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default App;
