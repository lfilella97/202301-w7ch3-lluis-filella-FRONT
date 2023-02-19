import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlicer";
import { useAppDispatch } from "../store/hooks";
import { APIdata } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL_API!;

  const loadRobots = useCallback(async () => {
    const response = await fetch(apiUrl);
    const robotsArray = (await response.json()) as APIdata;
    dispatch(loadRobotsActionCreator(robotsArray.robots));
  }, [apiUrl, dispatch]);
  const deleteRobot = useCallback(
    async (id: number) => {
      await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    },
    [apiUrl]
  );

  return { loadRobots, deleteRobot };
};

export default useApi;
