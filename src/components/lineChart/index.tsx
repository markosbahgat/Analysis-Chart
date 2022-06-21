import React, { MouseEvent, useRef } from "react";
import type { InteractionItem } from "chart.js";
import { Chart, getElementAtEvent } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
import { IDataSets } from "models";

interface Props {
  chartLabels: string[];
  dataChart: IDataSets[];
  handleClick: (name: string, value: number, month: string) => void;
}
export default function LineChart({
  chartLabels,
  dataChart,
  handleClick,
}: Props) {
  ChartJS.register(
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const chartRef = useRef<ChartJS>(null);
  const getElementData = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    handleClick(
      dataChart[datasetIndex].dataSets.label,
      dataChart[datasetIndex].dataSets.data[index],
      chartLabels[index]
    );
  };
  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    getElementData(getElementAtEvent(chart, event));
  };

  const options = {
    responsive: true,
    plugins: {
      Legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "No.of lessons",
      },
    },
  };
  if (dataChart) {
    return (
      <div className="xl:w-9/12 w-full">
        <Chart
          ref={chartRef}
          type="line"
          onClick={onClick}
          options={options}
          data={{
            labels: chartLabels,
            datasets: dataChart.map((item) => item.dataSets),
          }}
        />
      </div>
    );
  }
  return <div>loading.....</div>;
}
