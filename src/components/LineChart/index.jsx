import React, { useState, useEffect } from "react";
import { LineChartContainer } from "./Styles";
import Chart from "react-apexcharts";

const index = ({ transactions }) => {
  const [sortedData, setSortedData] = useState({ dates: [], amounts: [] });
  const sortedTransactions = [];
  transactions.map(transaction => sortedTransactions.push(transaction));
  if (sortedTransactions.length > 1) {
    sortedTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else sortedTransactions;
  useEffect(() => {
    setSortedData({
      dates: sortedTransactions.map(transaction => transaction.date),
      amounts: sortedTransactions.map(transaction => {
        if (transaction.type === "expense") return -transaction.amount;
        return transaction.amount;
      })
    });
  }, [transactions]);

  const options = {
    title: { text: "Path" },
    chart: { id: "line-graph" },
    xaxis: {
      categories: sortedData.dates.length > 0 ? sortedData.dates : ["Dates"]
    },
    series: [
      {
        name: "Finace path",
        data: sortedData.amounts
      }
    ],
    stroke: { curve: "smooth" }
  };

  return (
    <LineChartContainer>
      <Chart
        options={options}
        series={options.series}
        type="line"
        width="100%"
      />
    </LineChartContainer>
  );
};

export default index;
