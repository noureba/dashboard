import React, { useState } from "react";
import Card from "../components/Analytics/Card";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Line, Doughnut } from "react-chartjs-2";
import { products } from "../data/user";
import { Chart as Chartjs } from "chart.js/auto";
import "../styles/css/Home.css";

function Home() {

  
  const [state, setSatate] = useState({
    labels: [" Direct", "Affilliate","Sponsored"," E-mail"],
    datasets:[{
      label:"SOCIAL MEDIA TRAFFIC",
      data: [70,13,15,2],
      backgroundColor:['green', "gray", "blue", "black"]
    }]
  })

  const [data, setData] = useState({
    labels: ["Jun", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Octo","Nove","Dece"],
    datasets:[
    {
      label:"orders",
      data: [405,300,100,30,102,605,603,504,602,908,100,704],
      backgroundColor:["red"],
      borderColor:"blue"
    },
    {
        label:"stock",
        data: [605,105,203,300,401,305,403,201,908,103,704,201],
        backgroundColor:["red"],
        borderColor:"orange"
    },
]
  })


  return (
    <div className="analytics">
      <div className="cards">
        <Card
          title="Current Week"
          body="69,524$"
          iconeFooter={<AiOutlineArrowUp />}
          footer="Since last month"
          color="text-success"
          per="2.5%"
        />
        <Card
          title="Previous Week"
          body="58,254$"
          iconeFooter={<AiOutlineArrowUp />}
          footer="Since last month"
          color="text-success"
          per="3.6"
        />
      </div>
      <div className="line">
        <Line data={data}/>
        </div>
      <div className="chart">
        <div>
          <p className="text-primary text-center">TOTAL SALES</p>
          <Doughnut data={state} />
        </div>
        <div>
          <p className="text-primary">TOP SELLING PRODUCTS</p>
          <div>
          <table className="table table-striped table-bordered ">
        <tbody>
          {products.slice(0,5).map((e) => (
            <tr key={e.id}>
              <td>{e.title.slice(0,20)}...</td>
              <td className="text-success">Price: {e.price}$</td>
              <td>Quantity: {e.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Home;
