import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types";

const initialUserState: UserState = {
  isLogged: false,
  userName: "",
  token: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logInUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      userName: action.payload.userName,
      isLogged: true,
    }),
  },
});

export const userReducer = UserSlice.reducer;

export const { logInUser: logInUserActionCreator } = UserSlice.actions;
