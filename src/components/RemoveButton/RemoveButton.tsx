import { removeRobotActionCreator } from "../../store/features/robots/robotsSlicer";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";

interface RemoveButtonProps {
  id: number;
}
const RemoveButton = ({ id }: RemoveButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const removeRobot = async () => {
    dispatch(removeRobotActionCreator(id));
  };

  return (
    <Button
      className="remove__robot button"
      text={"🗑️"}
      action={removeRobot}
      disabled={false}
    />
  );
};

export default RemoveButton;
