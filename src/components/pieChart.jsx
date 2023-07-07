import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import "moment/locale/es";
import html2canvas from "html2canvas";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }, ref) => {
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
    labels: ["Tarjetas Crédito", "Tarjetas Débito"],
    datasets: [
      {
        label: "Total suma de movimientos",
        data: [data.totalCredit, data.totalDebit],
        backgroundColor: ["rgba(58, 101, 152, 1)", "rgba(239, 162, 82, 1)"],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Pie
        data={dataTest}
        options={options}
        ref={chartContainerRef}
        redraw={false}
        updateMode="none"
      />
    </div>
  );
};

export default forwardRef(PieChart);
