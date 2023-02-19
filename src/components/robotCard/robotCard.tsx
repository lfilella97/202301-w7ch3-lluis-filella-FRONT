import { RobotStructure } from "../../types";
import RemoveButton from "../RemoveButton/RemoveButton";

export interface RobotCardProps {
  robot: RobotStructure;
}

export const RobotCard = ({
  robot: { id, name, imageUrl, speed, endurance, creationDate },
}: RobotCardProps): JSX.Element => {
  return (
    <div className="robot-card">
      <h2 className="robot-card__title">{name}</h2>
      <img
        className="robot-card__image"
        width="327"
        height="222"
        src={imageUrl}
        alt={name}
      />
      <div className="robot-card__properties">
        <span className="robot-card__speed">Speed:{speed}</span>
        <span className="robot-card__endurance">Endurance:{endurance}</span>
        <span className="robot-card__creationDate">
          CreationDate:{creationDate}
        </span>
      </div>
      <RemoveButton id={id} />
    </div>
  );
};
