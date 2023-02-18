import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure } from "../../../types";

const initialRobots: RobotsStructure = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobots,
  reducers: {
    loadRobots: (currentRobots, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
  },
});

export const robotsReducer = robotsSlice.reducer;

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
