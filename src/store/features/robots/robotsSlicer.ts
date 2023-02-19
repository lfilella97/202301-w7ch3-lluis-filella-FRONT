import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { robots } from "../../../store";

import { RobotsStructure } from "../../../types";

const initialRobots: RobotsStructure = robots;

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobots,
  reducers: {
    loadRobots: (currentRobots, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
    removeRobot: (currentRobots, action: PayloadAction<number>) =>
      currentRobots.filter((robot) => robot._id !== action.payload),
  },
});

export const robotsReducer = robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  removeRobot: removeRobotActionCreator,
} = robotsSlice.actions;
