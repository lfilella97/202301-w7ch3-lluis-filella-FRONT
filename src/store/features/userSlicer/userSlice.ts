import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types";

const initialUserState: UserState = {
  isLogged: false,
  userName: "",
  token: "",
} as UserState;

const UserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logInUser: (currentUserState, action: PayloadAction<User>) => ({
      ...action.payload,
    }),
  },
});

export const userReducer = UserSlice.reducer;

export const { logInUser: loadUserActionCreator } = UserSlice.actions;
