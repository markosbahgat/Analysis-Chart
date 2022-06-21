import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/rootReducer";

interface EssentialsState {
  isDarkModeOn: boolean;
  lang: string;
}

const initialState: EssentialsState = {
  isDarkModeOn: false,
  lang: "en",
};

const essentialSlice = createSlice({
  name: "essential",
  initialState,
  reducers: {
    darkMode: (state: EssentialsState) => {
      state.isDarkModeOn = !state.isDarkModeOn;
    },
    changeLang: (
      state: EssentialsState,
      { payload }: PayloadAction<string>
    ) => {
      state.lang = payload.toLowerCase();
    },
  },
});
export const { darkMode, changeLang } = essentialSlice.actions;
export const essentialState = (state: RootState) => state.essential;
export default essentialSlice.reducer;
