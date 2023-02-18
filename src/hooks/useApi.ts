import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlicer";
import { useAppDispatch } from "../store/hooks";
import { RobotsStructure } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL_API!;

  const loadRobots = useCallback(async () => {
    const response = await fetch(apiUrl);
    const robotsArray = (await response.json()) as RobotsStructure;
    dispatch(loadRobotsActionCreator(robotsArray));
  }, [apiUrl, dispatch]);

  return { loadRobots };
};

export default useApi;
