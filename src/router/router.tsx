import { createBrowserRouter } from "react-router-dom";
import Root from "../App";
import RobotList from "../components/ListRobot/RobotList";

const routes = [
  {
    path: "/",
    element: <Root />,

    children: [{ path: "/", element: <RobotList /> }],
  },
];

const router = createBrowserRouter(routes);

export default router;
