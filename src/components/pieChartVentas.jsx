import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import "moment/locale/es";
import html2canvas from "html2canvas";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartVenta = ({ titleChart, chartRef, data }) => {
  const chartContainerRef = useRef(null);

  const captureImage = async (value) => {
    const imageURI = await html2canvas(value).then((canvas) =>
      canvas.toDataURL("image/png")
    );
    return imageURI;
  };

  useImperativeHandle(
    chartRef,
    () => ({
      getImageUri: async () =>
        await captureImage(chartContainerRef?.current?.canvas),
    }),
    [chartContainerRef]
  );

  const dataTest = {
    labels: data.map((item) => item.typeProduct),
    datasets: [
      {
        label: titleChart,
        data: data.map((item) => item.totalSubTotal),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
        ],
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

export default forwardRef(PieChartVenta);
