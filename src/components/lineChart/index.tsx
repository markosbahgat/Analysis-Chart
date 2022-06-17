import React, { MouseEvent, useRef } from 'react';
import type { InteractionItem } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';
import { Chart, getElementAtEvent } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { IDataSets } from 'models';

interface Props {
	chartLabels: string[];
	dataChart: IDataSets[];
	handleClick: (name: string, value: number, month: string) => void;
}
const LineChart: React.FC<Props> = ({ chartLabels, dataChart, handleClick }) => {
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
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

	const options = {
		responsive: true,
		plugins: {
			Legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: 'No.of lessons',
			},
		},
	};
	if (dataChart) {
		return (
			<div className='xl:w-9/12 w-full'>
				<Chart
					ref={chartRef}
					type='line'
					onClick={onClick}
					options={options}
					data={{
						labels: chartLabels,
						datasets: dataChart.map((item) => item.dataSets),
					}}
				/>
			</div>
		);
	} else return <div>loading.....</div>;
};

export default LineChart;
