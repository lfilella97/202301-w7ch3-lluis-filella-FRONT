import { useCallback } from "react";
import { apiUrl } from "../envoirementVariables";
import { loadRobotsActionCreator } from "../store/features/robotsSlicer/robotsSlice";
import { useAppDispatch } from "../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadRobots = useCallback(async () => {
    try {
      const response: Response = await fetch(apiUrl);
      const robotsArray = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(loadRobotsActionCreator(robotsArray.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { loadRobots };
};

export default useApi;
