import React, { useEffect } from "react";
import { Left, Left2, Right, Right2, Left3 } from "./icons";
const APP = {};
function drawPoints(points, colour) {
  for (const point of points) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.setAttributeNS(null, "cx", point[0]);
    circle.setAttributeNS(null, "cy", point[1]);
    circle.setAttributeNS(null, "r", 2);

    circle.setAttributeNS(null, "fill", colour);
    // console.log(circle);
    // APP.svgelement.appendChild(circle);
  }
}
function generatePath(points, relative) {
  let type = null;

  if (points.length === 3) {
    type = "Q";
  } else if (points.length === 4) {
    type = "C";
  } else if (points.length % 2 === 0) {
    type = "C";
  } else {
    throw "Number of points must be 3 or an even number more than 3";
  }

  const pathPoints = ["M ", points[0][0], ",", points[0][1], type];

  for (let p = 1, l = points.length; p < l; p++) {
    if (p >= 4 && p % 2 === 0) pathPoints.push("S");

    pathPoints.push(points[p][0]);
    pathPoints.push(",");
    pathPoints.push(points[p][1]);
  }
  console.log(pathPoints);
  return pathPoints.join(" ");
}
function MouseCoordinatesDisplay() {
  function updateCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`X: ${x}, Y: ${y}`);
  }
}
function drawBezier(pathString, stroke) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "d", pathString);
  path.setAttributeNS(null, "stroke", stroke);
  //   path.setAttributeNS(null, "fill", "#00C000");
  path.setAttributeNS(null, "fill", "transparent");
  path.setAttributeNS(null, "strokeWidth", "2px");
  document.getElementById("svg").appendChild(path);
}
function fourPoint() {
  const points = [
    [50, 50],
    [100, 350],
    [350, 250],
    [450, 400],
  ];
  console.log(points);
  drawPoints(points, "#00C000");

  const pathString = generatePath(points, false);

  drawBezier(pathString, "#00C000");
}
const Lines = ({ temp, temp2, points, top }) => {
  //   console.log(points);
  //
  //   useEffect(() => {
  //     if (points.length > 0 && top) {
  //       console.log("top inside", top);
  //       APP.svgelement = document.getElementById("svg");
  //       const bottom = points[0];
  //       const topPoint = top;
  //       const arrayPoints = [
  //         [bottom.x, bottom.y],
  //         [bottom.x, bottom.y],
  //         [topPoint.x, topPoint.y],
  //         [topPoint.x, topPoint.y],
  //       ];
  //       console.log(arrayPoints);
  //       arrayPoints.length > 0 && fourPoint(arrayPoints);
  //     }
  //   }, [points, top]);
  return (
    <div className="flex">
      {/* <Left /> */}
      <Left3 />
      {/* <Right /> */}
      <Right2 />
    </div>
  );
};

export default Lines;
