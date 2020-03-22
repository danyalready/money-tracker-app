import React from "react";
import { PieChartContainer } from "./Styles";
import Chart from "react-apexcharts";

const index = ({ transactions }) => {
  const profit = transactions.filter(transaction => {
    return transaction.transaction.type === "profit";
  });
  const expense = transactions.filter(transaction => {
    return transaction.transaction.type === "expense";
  });

  const sum = array => {
    let amounts = [];
    array.map(transaction => amounts.push(transaction.transaction.amount));
    if (amounts.length > 1)
      return amounts.reduce((a, c) => Number(a) + Number(c));
    return Number(amounts);
  };
  const options = {
    title: { text: `Total: ${sum(profit) - sum(expense)}` },
    series: [sum(profit), sum(expense)],
    labels: [`Profit ${sum(profit)}`, `Expense ${sum(expense)}`],
    colors: ["#64dd17", "#f44336"],
    chart: { type: "donut" },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "75%"
        }
      }
    }
  };

  return (
    <PieChartContainer>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        width="100%"
      />
    </PieChartContainer>
  );
};

export default index;
