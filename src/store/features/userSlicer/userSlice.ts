import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types";

const initialUserState: UserState = {
  isLogged: false,
  userName: "",
  token: "",
} as UserState;

const UserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logInUser: (currentUserState, action: PayloadAction<UserState>) => ({
      ...action.payload,
    }),
  },
});

export const robotsReducer = UserSlice.reducer;

export const { logInUser: loadUserActionCreator } = UserSlice.actions;
