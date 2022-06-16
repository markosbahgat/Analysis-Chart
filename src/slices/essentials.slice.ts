import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";

interface Essentials_State {
	boxModel: boolean;
	isDarkModeOn: boolean;
	lang: string;
}

const initialState: Essentials_State = {
	boxModel: false,
	isDarkModeOn: false,
	lang: 'ar',
};

const essentialSlice = createSlice({
	name: "essential",
	initialState,
	reducers: {
		showModel: (state:Essentials_State, {payload} :PayloadAction<boolean>) => {
			console.log(payload);
			state.boxModel = payload;
		},
		darkMode: (state: Essentials_State) => {
			state.isDarkModeOn = !state.isDarkModeOn;
		},
	},
});
export const { showModel, darkMode } = essentialSlice.actions;
export const essentialState = (state: RootState) => state.essential;
export default essentialSlice.reducer;
