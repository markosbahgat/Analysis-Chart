import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import GetChartsData from 'middlewares/getChartData.middleware';
import rootReducer from './rootReducer';
import { fetchParams } from 'models/enums/fetchParams.enums';
import { appendDataSets } from 'slices';
import { dummyDataSet } from 'shared';

const store = configureStore({
	reducer: rootReducer,
});

store.dispatch(GetChartsData(fetchParams));
store.dispatch(appendDataSets(dummyDataSet));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
