import React, { useState } from "react";
import Lights from "./lights";

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleLightClick = (color) => {
    setSelectedColor(color);
  };

  const isLightSelected = (color) => {
    return selectedColor === color ? "selected" : "";
  };

  return (
    <Lights
      redLightClick={() => handleLightClick("red")}
      yellowLightClick={() => handleLightClick("yellow")}
      greenLightClick={() => handleLightClick("green")}
      selectedClass={isLightSelected}
    />
  );
};

export default TrafficLight;