import { renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RemoveButton from "./RemoveButton";
import Wrapper from "../../mocks/Wrapper";
import useApi from "../../hooks/useApi";
import userEvent from "@testing-library/user-event";

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

describe("Given a DeleteButton component", () => {
  describe("When it is rendered and clicked", () => {
    test("It should call the action deleteRobot with the id 3", () => {
      const id = 3;
      const payload = { payload: 3, type: "robots/removeRobot" };

      renderHook(() => useApi, {
        wrapper() {
          return (
            <Wrapper>
              <RemoveButton id={id}></RemoveButton>
            </Wrapper>
          );
        },
      });

      const genericButton = screen.getByRole("button", {
        name: "🗑️",
      });

      userEvent.click(genericButton);

      expect(mockDispatcher).toHaveBeenCalledWith(payload);
    });
  });
});
