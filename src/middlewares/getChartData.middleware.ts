import { createAsyncThunk } from "@reduxjs/toolkit";
import { IData, IParams } from "models";
import axios from "axios";

export interface FetchError {
  errorMessage: string | null;
}

const GetChartsData = createAsyncThunk<
  IData[],
  IParams,
  { rejectValue: FetchError }
>("chartData/allData", async (params: IParams, { rejectWithValue }) => {
  const { limit } = params;
  try {
    const response = await axios.get<IData[]>("/data.json");
    return response.data.slice(0, limit);
  } catch (error: unknown) {
    return rejectWithValue(error as FetchError);
  }
});

export default GetChartsData;
