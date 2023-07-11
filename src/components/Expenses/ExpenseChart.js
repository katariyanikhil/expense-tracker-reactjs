import Chart from "../Charts/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  let totalValue = 0;

  for(const expense of props.expenses){
    const monthNumber = expense.date.getMonth(); //It returns number of the month => Jan = 0 upto Dec = 11
    chartDataPoints[monthNumber].value += expense.amount;
    totalValue += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} maxValue={totalValue}/>;
};

export default ExpenseChart;
