import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import RobotList from "./robotList";
import "@testing-library/jest-dom/extend-expect";

describe("Given a robotList component", () => {
  describe("When it is invoked and passed 3 robots", () => {
    test("Then it should render 3 robots card", () => {
      render(
        <Wrapper>
          <RobotList />
        </Wrapper>
      );

      const RobotCards = screen.getAllByRole("listitem");

      for (const RobotCard of RobotCards) {
        expect(RobotCard).toBeInTheDocument();
      }
    });
  });
});
