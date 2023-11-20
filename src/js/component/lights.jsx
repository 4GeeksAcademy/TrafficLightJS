import React from "react";

const Lights = (props) => {
  return (
    <div className="container text-center">
      <div className="lightsHolder"></div>
      <div className="trafficLights">
        <div
          className={`redLight ${props.selectedClass("red")}`}
          onClick={props.redLightClick}
        ></div>
        <div
          className={`yellowLight ${props.selectedClass("yellow")}`}
          onClick={props.yellowLightClick}
        ></div>
        <div
          className={`greenLight ${props.selectedClass("green")}`}
          onClick={props.greenLightClick}
        ></div>
      </div>
    </div>
  );
};

export default Lights;