import { createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from "../../API/ApiConfig";

export const RegisterUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const res = await apiConfig.post("/register", formData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
