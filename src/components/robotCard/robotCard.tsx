import { RobotStructure } from "../../types";
import RemoveButton from "../RemoveButton/RemoveButton";
import "./robotCardStyles.css";

export interface RobotCardProps {
  robot: RobotStructure;
}

export const RobotCard = ({
  robot: { _id, name, image, speed, endurance, creationDate },
}: RobotCardProps): JSX.Element => {
  return (
    <div className="robot-card">
      <img
        className="robot-card__image"
        width="327"
        height="222"
        src={image}
        alt={name}
      />
      <h2 className="robot-card__title">{name}</h2>
      <div className="robot-card__properties">
        <span className="robot-card__speed">Speed: {speed}</span>
        <span className="robot-card__endurance">Endurance: {endurance}</span>
        <span className="robot-card__creationDate">
          Creation Date: {creationDate.split("T", 1)}
        </span>
      </div>
      <RemoveButton id={_id} />
    </div>
  );
};
