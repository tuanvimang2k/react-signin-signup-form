import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import sourceData from "./data/sourceData.json";
import "./App.css";
import { url } from "./Helper";
export const MyChart = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + "/users/get-users");
        setData(response.data);
        console.log("Data fetched:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="dataCard2 customerCard2">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderRadius: 10,
              },
            ],
          }}
        ></Bar>
        <text>thống kê số lượng người dùng</text>
      </div>
      <div className="dataCard customerCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderRadius: 10,
              },
            ],
          }}
        ></Doughnut>
      </div>
    </div>
  );
};
