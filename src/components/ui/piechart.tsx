import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Question Accuracy",
        data: [12, 3], // 12 correct and 3 incorrect (12/15)
        backgroundColor: ["#93C5FD", "#1E3A8A"], // Dark blue for correct, light blue for incorrect
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}
