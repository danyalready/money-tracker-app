import React from "react";
import { Title, PieChartContainer } from "./Styles";
import Chart from "react-apexcharts";

const index = ({ transactions }) => {
  const profit = transactions.filter(profit => {
    return profit.type === "profit";
  });
  const expense = transactions.filter(expense => {
    return expense.type === "expense";
  });

  const sum = array => {
    let amounts = [];
    array.map(a => {
      amounts.push(a.amount);
    });
    return amounts.reduce((a, c) => Number(a) + Number(c));
  };

  const options = {
    series: [sum(profit), sum(expense)],
    labels: ["Profit", "Expense"],
    colors: ["#64dd17", "#f44336"],
    chart: {
      type: "donut"
    }
  };

  return (
    <PieChartContainer>
      <Title>Total:</Title>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        width="97%"
      />
    </PieChartContainer>
  );
};

export default index;
