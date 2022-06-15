import { combineReducers } from "@reduxjs/toolkit";
import { essentialReducer, chartDataReducer } from "slices";



const rootReducer = combineReducers({
	chartData: chartDataReducer,
	essential: essentialReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
