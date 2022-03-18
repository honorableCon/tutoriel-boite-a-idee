import React from "react";
import { Chart } from "react-google-charts";
import { useRecoilValue } from 'recoil';
import { metrique } from "../atoms/suggestions";


const options = {
  title: "Stats des idées",
  colors: ['#ce0033', '#198754'],
  width: 400,
  height: 250,
  pieHole: 0.5,
  is3D: false,
};

function Graph() {
    const metriques = useRecoilValue(metrique);
    const data = [
        ["Task", "Hours per Day"],
        ["Approuvé", metriques.accepte],
        ["Refusé", metriques.refuse],
      ];
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}


export default Graph;