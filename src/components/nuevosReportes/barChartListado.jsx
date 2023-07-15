import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "moment/locale/es";
import moment from "moment";
import html2canvas from "html2canvas";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const BarChart = ({ data }, ref) => {
  const chartContainerRef = useRef(null);

  console.log(data);

  const captureImage = async (value) => {
    console.log(value);
    const imageURI = await html2canvas(value).then((canvas) =>
      canvas.toDataURL("image/png")
    );
    return imageURI;
  };

  useImperativeHandle(
    ref,
    () => ({
      getImageUri: async () =>
        await captureImage(chartContainerRef?.current?.canvas),
    }),
    [chartContainerRef]
  );

  const dataTest = {
    labels: ["NombreTipoComprobante"],
    datasets: [
      {
        label: "EGRESOS",
        data: [data.totalStateSell],
        backgroundColor: "rgba(58, 101, 152, 1)",
      },
      {
        label: "EGRESOS ANULACIONES",
        data: [data.totalStateLost],
        backgroundColor: "rgba(239, 162, 82, 1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: `Por ${moment(data.date).format("MMMM-YYYY")}`,
      },
    },
  };

  return (
    <div>
      <Bar
        data={dataTest}
        options={options}
        ref={chartContainerRef}
        redraw={false}
        updateMode="none"
      />
    </div>
  );
};

export default forwardRef(BarChart);
