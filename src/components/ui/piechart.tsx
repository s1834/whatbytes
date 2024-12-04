import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Question Accuracy",
        data: [12, 3],
        backgroundColor: ["#93C5FD", "#1E3A8A"],
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

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
      const { width, height } = chart;
      const ctx = chart.ctx;
      const text = "🎯";

      ctx.save();
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      ctx.fillText(text, width / 2, height / 2);
      ctx.restore();
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </>
  );
}
