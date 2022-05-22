import React, { useState } from "react";
import Card from "../components/Analytics/Card";
import { IoMdContacts } from "react-icons/io";
import { MdPointOfSale } from "react-icons/md";
import { BiImport, BiExport } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Bar, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import "../styles/css/Sales.css";

function Sales() {
  const [state, setState] = useState({
    labels: ["USA", "UK", "France", "italy", "spain", "Moroco"],
    datasets: [
      {
        label: "REVENUE BY LOCATION",
        data: [5401, 3658, 9412, 7485, 1245, 10245],
        backgroundColor: ["#0C1E35"],
      },
    ],
  });
  const [revenue, setrevenue] = useState({
    labels: ["Mon", "Tru", "Wed", "Tru", "Fri", "Sat"],
    datasets: [
      {
        label: "REVENUE THIS WEEK",
        data: [201, 658, 412, 485, 245, 245],
        backgroundColor: ["red"],
      },
    ],
  });

  return (
    <div className="sales">
      <div className="cards py-5">
        <Card
          title="Customers"
          iconeTitle={<IoMdContacts />}
          body="1,523"
          iconeFooter={<IoMdContacts />}
          footer="Since last month"
          color="text-success"
        />
        <Card
          title="Orders"
          iconeTitle={<MdPointOfSale />}
          body="56"
          iconeFooter={<AiOutlineArrowDown />}
          footer="Since last month"
          color="text-danger"
        />
        <Card
          title="Revenue"
          iconeTitle={<BiImport />}
          body="15,263$"
          iconeFooter={<IoMdContacts />}
          footer="Since last month"
          color="text-success"
        />
        <Card
          title="Growth"
          iconeTitle={<BiExport />}
          body="1,571%"
          iconeFooter={<IoMdContacts />}
          footer="Since last month"
          color="text-success"
        />
      </div>
      <div className="chart">
        <div className="bar">
            <p className="text-center text-primary p-2">REVENUE BY LOCATION</p>
          <Bar data={state} />
        </div>
        <div>
            <p className="text-center text-primary p-2">REVENUE THIS WEEK</p>
          <Line data={revenue} />
        </div>
      </div>
    </div>
  );
}

export default Sales;
