import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("thunk triggered...");
      const res = await api.post("/auth/login", credentials);
      console.log(res);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("MESSAGE:", error.message);
      console.log("CODE:", error.code);
      console.log("RESPONSE:", error.response);
      console.log("REQUEST:", error.request);

      return thunkApi.rejectWithValue(error.message || "Login Failed!");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/me",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");

    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Unauthorised User!");
    }
  },
);
