import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text `ROBOTS LIST`", () => {
      const title = "ROBOTS LIST";

      render(<Header />);

      const header = screen.getByRole("heading", {
        name: title,
      });

      expect(header).toHaveTextContent(title);
    });
  });
});
