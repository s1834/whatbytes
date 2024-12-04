import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  annotationPlugin
);

export function LineGraph() {
  const data = {
    labels: ["0", "25", "50", "75", "100"], // Percentile values
    datasets: [
      {
        label: "", // No legend
        data: [200, 350, 400, 450, 500], // Example data
        borderColor: "#4b6cb7",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8, // Larger radius on hover
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4b6cb7",
        pointHoverBackgroundColor: "#1E3A8A", // Dark blue on hover
        pointHoverBorderColor: "#1E3A8A",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: false, // Removed "Percentile" text
        },
        grid: {
          display: false, // Remove gridlines
        },
      },
      y: {
        display: false, // Hide Y-axis numbering
        beginAtZero: true,
        grid: {
          display: false, // Remove gridlines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // No legend
      },
      tooltip: {
        intersect: false,
        callbacks: {
          label: function (context: any) {
            return `${context.raw} students`;
          },
        },
      },
      annotation: {
        annotations: {
          userPercentile: {
            type: "line",
            scaleID: "x",
            value: 1.2, // Set to 30% between 0 and 50 on the X-axis
            borderColor: "red",
            borderWidth: 2,
            label: {
              content: "Your Percentile", // Display "Your Percentile" on the line
              enabled: true,
              position: "end",
              backgroundColor: "red",
              color: "white",
              font: {
                weight: "bold",
              },
            },
          },
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  };

  return <Line data={data} options={options} />;
}
