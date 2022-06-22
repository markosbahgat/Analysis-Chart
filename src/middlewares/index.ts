import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IData, IParams } from "@/models/index";

export interface FetchError {
  errorMessage: string | null;
}

/**
 * @params this asyncAction takes 3 params which are (limit, id, sort) for filtering the coming data.
 * @returns asyncAction should return all the data inside the data.json file.
 */

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
