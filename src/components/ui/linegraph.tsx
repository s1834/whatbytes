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
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    datasets: [
      {
        label: "",
        data: [0, 35, 40, 30, 37, 45, 50, 60, 52, 45, 35],
        borderColor: "#4b6cb7",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4b6cb7",
        pointHoverBackgroundColor: "#1E3A8A",
        pointHoverBorderColor: "#1E3A8A",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
        callbacks: {
          label: function (context) {
            return `${context.raw} students`;
          },
        },
      },
      annotation: {
        annotations: {
          userPercentile: {
            type: "line",
            scaleID: "x",
            value: 1.2,
            borderColor: "red",
            borderWidth: 2,
            label: {
              content: "Your Percentile",
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
      mode: "nearest",
      intersect: false,
      onHover: (event, chartElement) => {
        if (chartElement && chartElement.length) {
          const index = chartElement[0].index;
          chartElement[0].element.backgroundColor = "#4b6cb7";
          chartElement[0].element.borderColor = "#1E3A8A";
        }
      },
    },
  };

  return <Line data={data} options={options} />;
}
