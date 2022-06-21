import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

interface Essentials_State {
	isDarkModeOn: boolean;
	lang: string;
}

const initialState: Essentials_State = {
	isDarkModeOn: false,
	lang: 'en',
};

const essentialSlice = createSlice({
	name: 'essential',
	initialState,
	reducers: {
		darkMode: (state: Essentials_State) => {
			state.isDarkModeOn = !state.isDarkModeOn;
		},
		changeLang: (state: Essentials_State, { payload }: PayloadAction<string>) => {
			state.lang = payload.toLowerCase();
		},
	},
});
export const { darkMode, changeLang } = essentialSlice.actions;
export const essentialState = (state: RootState) => state.essential;
export default essentialSlice.reducer;
