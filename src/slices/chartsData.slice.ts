import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/rootReducer";
import { IData, IDataSets } from "models";
import GetChartsData from 'middlewares/getChartData.middleware';


interface ChartDataState {
	allData: IData[];
    Loading: boolean;
    errorMessage: string | null;
    filters: {
        country: string | null,
        camp: string | null,
        school:string | null,
    },
    chartDataSets: IDataSets[],
}

const initialState: ChartDataState = {
	allData: [],
    Loading: false,
    errorMessage: null,
    filters: {
        country: "Kenya",
        camp: "Kakuma",
        school:null
    },
    chartDataSets:[]
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
        },
        appendDataSets: (state: ChartDataState, { payload }: PayloadAction<IDataSets>) => {
            // console.log(state.chartDataSets.length);
            // state.chartDataSets.length === 0 ?
            //     state.chartDataSets.push(payload) :
            //     state.chartDataSets.forEach(item => {
            //         // console.log(item.label === payload.label);
            //         // if (item.label === payload.label) console.log(item.label === payload.label)
            //         // else state.chartDataSets.push(payload);
            //     });
            if (!state.chartDataSets.find(item => item.label === payload.label)) state.chartDataSets.push(payload);
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
export const { setFilters, appendDataSets } = chartDataSlice.actions;
