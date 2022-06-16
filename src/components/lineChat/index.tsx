import React, { MouseEvent, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import type { InteractionItem } from 'chart.js';
import Chart from 'chart.js/auto';
import {
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';
import { CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from 'chart.js'; 
import { IDataSets } from 'models';

interface Props {
  chartLabels: string[],
  dataSets:IDataSets[]
}
const LineChart: React.FC<Props> = ({ chartLabels, dataSets }) => {
  console.log(dataSets);
  
  Chart.register(CategoryScale, LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

  const options = {
    responsive: true,
    plugins: {
      Legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'No.of lessons'
      }
    }
  };
  if (dataSets) {
    return (
      <div className='w-9/12'>
        <Line datasetIdKey='id' data={{
      labels: chartLabels,
      datasets: dataSets
        }} options={options} />
      </div>);
    
  }
  else return <div>loading.....</div>;
}

export default LineChart;
