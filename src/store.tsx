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
    name: "The Enforecer",
    imageUrl:
      "https://th.bing.com/th/id/R.c80c2c84b81e6d7dab399091c4a31305?rik=1Bj%2fnd%2fKZ34fdw&riu=http%3a%2f%2fwww.igorstshirts.com%2fblog%2fconceptrobots%2f2011%2fflyingdebris%2fflyingdebris_09.jpg&ehk=Z%2f%2f8TdvKODoBdQ%2bM96GznGYHNNl8vtXq0CwlkQSLBsE%3d&risl=&pid=ImgRaw&r=0",
    speed: 9,
    endurance: 1,
    creationDate: "4/3/2020",
  },
  {
    id: 2,
    name: "Medic",
    imageUrl:
      "https://th.bing.com/th/id/R.c80c2c84b81e6d7dab399091c4a31305?rik=1Bj%2fnd%2fKZ34fdw&riu=http%3a%2f%2fwww.igorstshirts.com%2fblog%2fconceptrobots%2f2011%2fflyingdebris%2fflyingdebris_09.jpg&ehk=Z%2f%2f8TdvKODoBdQ%2bM96GznGYHNNl8vtXq0CwlkQSLBsE%3d&risl=&pid=ImgRaw&r=0",
    speed: 1,
    endurance: 1,
    creationDate: "12/4/2023",
  },
  {
    id: 3,
    name: "patato",
    imageUrl:
      "https://th.bing.com/th/id/R.8fbac70c8e0e95d27491d09b01b06cba?rik=AZ0uV%2bHfwNMjBw&riu=http%3a%2f%2fconceptartworld.com%2fwp-content%2fuploads%2f2013%2f02%2fRobot_Concept_Art_by_Galan_Pang_01a.jpg&ehk=2zucqCtS5aKxNy%2f1Q0dwWphAEAPSuKv8fbB6F4ZLbZg%3d&risl=&pid=ImgRaw&r=0",
    speed: 1,
    endurance: 1,
    creationDate: "30/3/2021",
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
