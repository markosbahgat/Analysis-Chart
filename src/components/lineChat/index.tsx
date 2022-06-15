import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from 'chart.js'; 
import { IData, IFilters } from 'models';

interface Props {
  chartData: IData[],
  filters: IFilters,
}
const LineChart:React.FC<Props> = ({chartData, filters}) => {
  Chart.register(CategoryScale, LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const options = {
    responsive: true,
    plugins: {
      Legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Markos Bahgat'
      }
    }
  };
  const data = {
    labels: [...new Set(chartData.map((item:IData) => item.month))].sort((prevMonth, nextMonth) => monthNames.indexOf(prevMonth) - monthNames.indexOf(nextMonth)),
    datasets: [{
      label: 'No.of Lessons',
      data: chartData.filter(item => filters.school ? item.school === filters.school : item).map((item: IData) => item.lessons),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }]
  }
  return <div className='w-9/12'><Line  datasetIdKey='id' data={data} options={options} /></div>;
}

export default LineChart;
