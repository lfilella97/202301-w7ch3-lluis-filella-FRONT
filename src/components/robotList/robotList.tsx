import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import { RobotCard } from "../robotCard/robotCard";
import "./robotListStyles.css";
const RobotList = (): JSX.Element => {
  const { loadRobots } = useApi();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  const robots = useAppSelector((state) => state.robots);

  return (
    <ul className="robots-list">
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotList;
