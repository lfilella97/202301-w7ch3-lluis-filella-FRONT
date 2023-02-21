import { render, screen } from "@testing-library/react";
import App from "./App";
import Wrapper from "./mocks/Wrapper";
import "@testing-library/jest-dom/extend-expect";

describe("Given a App component", () => {
  describe("When rendered", () => {
    test("It should render the text `ROBOTS LIST`", () => {
      const title = "ROBOTS LIST";

      render(
        <Wrapper>
          <App />
        </Wrapper>
      );

      const header = screen.getByRole("heading", {
        name: title,
      });

      expect(header).toHaveTextContent(title);
    });
  });
});
