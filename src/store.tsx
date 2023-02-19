import {
  Action,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import { RobotsStructure } from "./types";

export const robots: RobotsStructure = [
  {
    id: 1,
    name: "patato",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FmmiJb_robot-warm-up-android-humanoid-robot-hd-png%2F&psig=AOvVaw3mbXBjpe1I1WZlgDWCAXq6&ust=1676896991056000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCApZ3Oof0CFQAAAAAdAAAAABAE",
    speed: 9,
    endurance: 1,
    creationDate: "dad",
  },
  {
    id: 2,
    name: "patato",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FmmiJb_robot-warm-up-android-humanoid-robot-hd-png%2F&psig=AOvVaw3mbXBjpe1I1WZlgDWCAXq6&ust=1676896991056000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCApZ3Oof0CFQAAAAAdAAAAABAE",
    speed: 1,
    endurance: 1,
    creationDate: "dad",
  },
  {
    id: 3,
    name: "patato",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FmmiJb_robot-warm-up-android-humanoid-robot-hd-png%2F&psig=AOvVaw3mbXBjpe1I1WZlgDWCAXq6&ust=1676896991056000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCApZ3Oof0CFQAAAAAdAAAAABAE",
    speed: 1,
    endurance: 1,
    creationDate: "dad",
  },
];

const mockInitialRobots: RobotsStructure = robots;

const robotsSlice = createSlice({
  name: "robots",
  initialState: mockInitialRobots,
  reducers: {
    loadRobots: (currentRobots, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
    removeRobot: (currentRobots, action: PayloadAction<number>) =>
      currentRobots.filter((robot) => robot.id !== action.payload),
  },
});

export const mockRobotsReducer = robotsSlice.reducer;

export const {
  loadRobots: mockLoadRobotsActionCreator,
  removeRobot: mockRemoveRobotActionCreator,
} = robotsSlice.actions;

export const mockStore = configureStore({
  reducer: {
    robots: mockRobotsReducer,
  },
});

export type AppDispatch = typeof mockStore.dispatch;
export type RootState = ReturnType<typeof mockStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
