import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import GetChartsData  from 'middlewares/getChartData.middleware';
import rootReducer from './rootReducer';
import { fetchParams } from 'models/enums/fetchParams.enums';


const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(GetChartsData(fetchParams))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
export default store;
