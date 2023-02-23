import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { errorHandlers } from "../mocks/handlers";
import Wrapper from "../mocks/Wrapper";
import server from "../mocks/server";
import useApi from "./useApi";

const mockDispatcher = jest.fn();
jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

describe("Given a useApi function", () => {
  describe("When we call loadRobots function and is responded with a robot list", () => {
    test("Then it should update our local robot list", async () => {
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

  describe("When we call loadRobots function and it receives a bad request message", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should return the error message", async () => {
      const errorMessage = "Bad Request";

      const {
        result: {
          current: { loadRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      const response = await act(async () => loadRobots());

      expect(response).toStrictEqual(errorMessage);
    });
  });
});
