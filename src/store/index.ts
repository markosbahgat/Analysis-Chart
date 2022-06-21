import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import GetChartsData from "@/middlewares/index";
import { FetchParams } from "@/models/index";
import { appendDataSets } from "@/slices/index";
import { dummyDataSet } from "@/shared";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer
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
