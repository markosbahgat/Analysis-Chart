import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/rootReducer";

interface Essentials_State {
	boxModel: boolean;
	darkMode: boolean;
	lang: string;
}

const initialState: Essentials_State = {
	boxModel: false,
	darkMode: false,
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
		showDarkMode: (state:Essentials_State, {payload}:PayloadAction<boolean>) => {
			state.darkMode = payload;
		},
	},
});
export const { showModel, showDarkMode } = essentialSlice.actions;
export const essentialState = (state: RootState) => state.essential;
export default essentialSlice.reducer;
