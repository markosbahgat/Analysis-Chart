import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import GetChartsData from 'middlewares/getChartData.middleware';
import rootReducer from './rootReducer';
import { fetchParams } from 'models/enums/fetchParams.enums';
import { appendDataSets } from 'slices';


const store = configureStore({
	reducer: rootReducer,
});

store.dispatch(GetChartsData(fetchParams));
store.dispatch(
	appendDataSets({
		id: Date.now().toLocaleString(),
		dataSets: {
			label: 'Testing School',
			data: [200, 150, 100, 230, 40, 90, 150, 80, 180, 260, 200, 100],
			borderColor: 'rgb(53, 162, 235)',
			fill: false,
			borderWidth: 3,
			hoverRadius: 10,
			radius: 5,
			backgroundColor: 'transparent',
		},
	})
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
