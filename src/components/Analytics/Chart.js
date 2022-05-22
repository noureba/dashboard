import React from "react";
import { Bar, Line ,Doughnut } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

function chart({ charData, media, browser, system }) {
  return (
    <div className="chart2">
      <div className="line">
        <p className="text-center text-primary py-2">SESSIONS OVERVIEW</p>
        <Line data={charData} />
      </div>
      <div className="pie my-5">
        <div className="p-2">
          <p className="text-center p-2 text-primary">SOCIAL MEDIA TRAFFIC</p>
          <Doughnut  data={media} />
        </div>
        <div className="p-2">
          <p className="text-center p-2 text-primary">SESSIONS BY BROWSER</p>
        <Doughnut  data={browser} />
        </div>
        <div className="p-2">
          <p className="text-center p-2 text-primary">OPERATING SYSTEM</p>
        <Doughnut  data={system} />
        </div>
      </div>
    </div>
  );
}

export default chart;
