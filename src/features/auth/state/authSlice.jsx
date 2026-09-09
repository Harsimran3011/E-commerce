import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    registerUsers: [],
    loggedInUser: null,
    isloading: false,
  },

  reducers: {
    addUser: (state, action) => {
      state.registerUsers.push(action.payload);
    },

    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },

    removeUser: (state) => {
      state.loggedInUser = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.isloading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loggedInUser = action.payload;
        state.isloading = false;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isloading = false;
      })
      .addCase(hydrateUserAction.pending, (state) => {
        state.isloading = true;
      })
      .addCase(hydrateUserAction.fulfilled, (state, action) => {
        state.loggedInUser = action.payload;
        state.isloading = false;
      })
      .addCase(hydrateUserAction.rejected, (state) => {
        state.isloading = false;
      });
  },
});

export const { addUser, setLoggedInUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
