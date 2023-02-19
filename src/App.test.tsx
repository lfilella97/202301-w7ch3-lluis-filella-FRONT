import { render, screen } from "@testing-library/react";
import App from "./App";
import Wrapper from "./mocks/Wrapper";
import "@testing-library/jest-dom/extend-expect";

describe("Given a Button component", () => {
  describe("When rendered with the class 'primary__button', with the text 'Primary' and with the action 'action'", () => {
    test("It should render a button with the class 'primary__button', the text 'Primary', and the function 'action'", () => {
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
