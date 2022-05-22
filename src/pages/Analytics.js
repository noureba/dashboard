import React,{useState} from "react";
import Cards from "../components/Analytics/Cards";
import Chart from "../components/Analytics/Chart";
import {info} from "../data/user"
import "../styles/css/Analytics.css"


function Analytics() {
  const [charData, setcharData] = useState({
    labels: info.map((e) => e.month),
    datasets:[{
      label:"SESSIONS OVERVIEW",
      data: info.map((e) => e.userGain),
      backgroundColor: ['#0C1E35'],
      borderColor:['green']
    }]
  })

  const [mediaData, setmediaData] = useState({
    labels: ["Facebook", "Google","twiter","instarm","Others"],
    datasets:[{
      label:"SOCIAL MEDIA TRAFFIC",
      data: [45,30,10,3,12],
      backgroundColor:['blue', "red", "#0077ff", "orange", "gray"]
    }]
  })

  const [browserData, setbrowserData] = useState({
    labels: ["Chrome", "Firfox","Safari","opera","Others"],
    datasets:[{
      label:"SOCIAL MEDIA TRAFFIC",
      data: [70,10,7,10,3],
      backgroundColor:['orange', "red", "#0077ff", "red", "gray"]
    }]
  })

  const [system, setSystem] = useState({
    labels: ["Android", "Apple","windows","Others"],
    datasets:[{
      label:"SOCIAL MEDIA TRAFFIC",
      data: [70,13,15,2],
      backgroundColor:['green', "gray", "blue", "black"]
    }]
  })
  

  return (
    <div className="analytics">
      <div className="py-5">
        <Cards />
      </div>
      <div className="py-2">
        <Chart charData ={charData} media={mediaData} browser={browserData} system={system}/>
      </div>
    </div>
  );
}

export default Analytics;
