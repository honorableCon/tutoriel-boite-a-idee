import React from "react";
import { Chart } from "react-google-charts";


const options = {
    title: "Stats des idées",
    colors :['#ce0033', '#198754'],
    width:400,
    height:250,
    pieHole: 0.5,
    is3D: false,
};

const data01 = [
  ["Task", "Hours per Day"],
  ["Approuvé", 11],
  ["Refusé", 2],
];
function Graph({data}) {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data01}
      options={options}
    />
  );
}


export default Graph;