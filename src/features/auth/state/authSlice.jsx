import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    registerUsers: [],
    loggedInUser: null,
    isloading: true,
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

    setLoading: (state, action) => {
      state.isloading = action.payload;
    },
  },
});

export const { addUser, setLoggedInUser, removeUser, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
