import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as Chartjs} from "chart.js/auto"
import '../styles/css/Reports.css'

function Reports() {
    const [data, setData] = useState({
        labels: ["Jun", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Octo","Nove","Dece"],
        datasets:[
        {
          label:"Products",
          data: [45,30,10,3,12,65,63,54,62,98,10,74],
          backgroundColor:["red"],
          borderColor:"blue"
        },
        {
            label:"Users",
            data: [65,15,23,30,41,35,43,21,98,13,74,21],
            backgroundColor:["red"],
            borderColor:"orange"
        },
        {
            label:"Stock",
            data: [10,45,23,41,34,45,23,32,54,98,12,74],
            backgroundColor:["red"],
            borderColor:"red"
        },
    ]
      })

  return (
    <div className='reports'>
        <div>
        <Line data={data}/>

        </div>
    </div>
  )
}

export default Reports