import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const [chartData, setChartData] = useState({
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Question Accuracy",
        data: [1, 1], // Placeholder
        backgroundColor: ["#93C5FD", "#1E3A8A"],
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart: any) {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.save();
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#000";
      ctx.fillText("🎯", width / 2, height / 2);
      ctx.restore();
    },
  };

  useEffect(() => {
    async function fetchScores() {
      try {
        const response = await axios.get("/api/scores");
        console.log("API Response:", response.data);

        const { currentScore } = response.data.data[0];
        const totalQuestions = 15;

        const correct = currentScore || 0;
        const incorrect = totalQuestions - correct;

        setChartData({
          labels: ["Correct", "Incorrect"],
          datasets: [
            {
              label: "Question Accuracy",
              data: [correct, incorrect],
              backgroundColor: ["#93C5FD", "#1E3A8A"],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    }

    fetchScores();
  }, []);

  return (
    <>
      <Doughnut
        data={chartData}
        options={options}
        plugins={[centerTextPlugin]}
      />
    </>
  );
}
