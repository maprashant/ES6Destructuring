// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

//   const [model, [topcolor, other], speed: {topSpeed, zero} ] = ['Honda Civic', ['black', ], {140, 8.5}];
// console.log(cars);
// const [honda, tesla] = cars;

// const {
//   speedStats: { topSpeed: hondaTopSpeed },
// } = honda;

// const {
//   coloursByPopularity: [hondaTopColour],
// } = honda;

// // const {model : "Honda Civic"} = honda;

// // const {model : "Tesla"} = tesla;

// const {
//   speedStats: { topSpeed: teslaTopSpeed },
// } = tesla;

// const {
//   coloursByPopularity: [teslaTopColour],
// } = tesla;

console.log(cars);

const [tesla, honda] = cars;

// const { model } = Tesla;
// const { model } = Honda;

const {
  specs: { topSpeed: teslaTopSpeed, color: teslaTopColour },
} = tesla;
const {
  specs: { topSpeed: hondaTopSpeed, color: hondaTopColour },
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
