import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/rootReducer";
import { IData } from "models";
import GetChartsData from 'middlewares/getChartData.middleware';


interface ChartDataState {
	allData: IData[];
    Loading: boolean;
    errorMessage: string | null;
    filters: {
        country: string | null,
        camp: string | null,
        school:string | null,
    }
}

const initialState: ChartDataState = {
	allData: [],
    Loading: false,
    errorMessage: null,
    filters: {
        country: null,
        camp: null,
        school:null
    }
};

const chartDataSlice = createSlice({
	name: "chartData",
	initialState,
    reducers: {
        setFilters: (state: ChartDataState, { payload }: PayloadAction<{ key: string, value: string | null }>) => {
            const { key, value } = payload;
            switch (key) {
                case 'country':
                    state.filters.country = value;
                    break;
                case 'camp':
                    state.filters.camp = value;
                    break;
                case 'school':
                    state.filters.school = value;
                    break;
                default:
                    return state
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetChartsData.pending, (state) => {
            state.Loading = true;
            
        });
        builder.addCase(GetChartsData.fulfilled, (state, {payload} :PayloadAction<IData[]>) => {
			state.allData = payload;
            state.Loading = false;
            
		});
		builder.addCase(GetChartsData.rejected, (state, {payload}:PayloadAction<any>) => {
			state.errorMessage = payload?.errorMessage;
			state.Loading = false;
		});
    }
});
export default chartDataSlice.reducer;
export const chartState = (state: RootState) => state.chartData;
export const { setFilters } = chartDataSlice.actions;
