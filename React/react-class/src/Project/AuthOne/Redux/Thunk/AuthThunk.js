import { createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from "../../API/ApiConfig";

export const registerUser = createAsyncThunk(
  "auth/registerUser", // pending, fulfilled, rejected
  async (formData, thunkAPI) => {
    try {
      const res = await apiConfig.post("/register", formData);
      return res.data;
    } catch (err) {
      console.info(err);
      thunkAPI.rejectWithValue(err);
    }
  }
);
