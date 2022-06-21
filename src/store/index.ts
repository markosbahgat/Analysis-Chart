import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import GetChartsData from "middlewares/getChartData.middleware";
import { FetchParams } from "models";
import { appendDataSets } from "slices";
import { dummyDataSet } from "shared";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(GetChartsData(FetchParams));
store.dispatch(appendDataSets(dummyDataSet));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
