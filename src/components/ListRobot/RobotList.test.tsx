import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import "@testing-library/jest-dom/extend-expect";
import RobotList from "./RobotList";

describe("Given a robotList component", () => {
  describe("When it is invoked and passed 3 robots", () => {
    test("Then it should render 3 robots card", () => {
      render(
        <Wrapper>
          <RobotList />
        </Wrapper>
      );

      const RobotCards = screen.getAllByRole("list");

      for (const RobotCard of RobotCards) {
        expect(RobotCard).toBeInTheDocument();
      }
    });
  });
});
