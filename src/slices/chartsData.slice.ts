import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';
import { IData, IDataSets } from 'models';
import GetChartsData from 'middlewares/getChartData.middleware';
import { FetchError } from '../middlewares/getChartData.middleware';

interface ChartDataState {
	allData: IData[];
	Loading: boolean;
	errorMessage: FetchError | undefined;
	filters: {
		country: string | null;
		camp: string | null;
		school: string | null;
	};
	chartDataSets: IDataSets[];
}

const initialState: ChartDataState = {
	allData: [],
	Loading: false,
	errorMessage: undefined,
	filters: {
		country: 'Kenya',
		camp: 'Kakuma',
		school: null,
	},
	chartDataSets: [],
};

const chartDataSlice = createSlice({
	name: 'chartData',
	initialState,
	reducers: {
		setFilters: (state: ChartDataState, { payload }: PayloadAction<{ key: string; value: string | null }>) => {
			const { key, value } = payload;
			switch (key) {
				case 'country':
					localStorage.setItem('filters', JSON.stringify({ ...state.filters, country: value }));
					state.filters.country = value;
					break;
				case 'camp':
					localStorage.setItem('filters', JSON.stringify({ ...state.filters, camp: value }));
					state.filters.camp = value;
					break;
				case 'school':
					localStorage.setItem('filters', JSON.stringify({ ...state.filters, school: value }));
					state.filters.school = value;
					break;
				default:
					return state;
			}
		},
		appendDataSets: (state: ChartDataState, { payload }: PayloadAction<IDataSets>) => {
			if (state.chartDataSets.find((item) => item.dataSets.label === 'Testing School'))
				state.chartDataSets.length = 0;
			if (!state.chartDataSets.find((item) => item.dataSets.label === payload.dataSets.label))
				state.chartDataSets.push(payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(GetChartsData.pending, (state) => {
			state.Loading = true;
		});
		builder.addCase(GetChartsData.fulfilled, (state, { payload }: PayloadAction<IData[]>) => {
			state.allData = payload;
			state.Loading = false;
		});
		builder.addCase(GetChartsData.rejected, (state, { payload }: PayloadAction<FetchError | undefined>) => {
			state.errorMessage = payload;
			state.Loading = false;
		});
	},
});
export default chartDataSlice.reducer;
export const chartState = (state: RootState) => state.chartData;
export const { setFilters, appendDataSets } = chartDataSlice.actions;
