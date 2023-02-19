import Wrapper from "../mocks/Wrapper";
import useApi from "./useApi";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const mockDispatcher = jest.fn();

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

describe("Given a useApi function", () => {
  describe("When we call its loadRobots function and is responded with a robot list", () => {
    test("then it should update our local robot list", async () => {
      const {
        result: {
          current: { loadRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await act(async () => loadRobots());

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });
});
