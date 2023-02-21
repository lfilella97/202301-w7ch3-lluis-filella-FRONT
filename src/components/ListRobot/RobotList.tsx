import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import { RobotCard } from "../CardRobot/RobotCard";
import "./RobotListStyles.css";
const RobotList = (): JSX.Element => {
  const { loadRobots } = useApi();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  const robots = useAppSelector((state) => state.robots);

  return (
    <>
      <h2 className="robots-list__title">ROBOTS LIST</h2>
      <ul className="robots-list">
        {robots.map((robot) => (
          <li key={robot._id}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
