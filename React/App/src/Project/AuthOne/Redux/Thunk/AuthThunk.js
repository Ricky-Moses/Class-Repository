import { createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from "../../API/apiConfig";

// Register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const res = await apiConfig.post("/register", formData);
      return res.data;
    } catch (err) {
      console.info(err?.response?.data?.msg);
      return thunkAPI.rejectWithValue(err?.response?.data?.msg);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    try {
      const res = await apiConfig.post("/login", formData);
      return res.data;
    } catch (err) {
      console.info(err?.response?.data?.msg);
      return thunkAPI.rejectWithValue(err?.response?.data?.msg);
    }
  }
);
