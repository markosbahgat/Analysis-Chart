import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

interface Essentials_State {
	isSideBarOpen: boolean;
	isDarkModeOn: boolean;
	lang: string;
}

const initialState: Essentials_State = {
	isSideBarOpen: false,
	isDarkModeOn: false,
	lang: 'en',
};

const essentialSlice = createSlice({
	name: 'essential',
	initialState,
	reducers: {
		showSidebar: (state: Essentials_State) => {
			state.isSideBarOpen = !state.isSideBarOpen;
		},
		darkMode: (state: Essentials_State) => {
			state.isDarkModeOn = !state.isDarkModeOn;
		},
		changeLang: (state: Essentials_State, { payload }: PayloadAction<string>) => {
			state.lang = payload.toLowerCase();
		},
	},
});
export const { showSidebar, darkMode, changeLang } = essentialSlice.actions;
export const essentialState = (state: RootState) => state.essential;
export default essentialSlice.reducer;
