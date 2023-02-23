import { logInUserActionCreator } from "./userSlice";
import type { UserState } from "../../../types";

describe("Given logInUserAction", () => {
  describe("When it is called given a userName: Jan, isLogged: true and a token: 26P", () => {
    test("Then it should the a new object with the same data", () => {
      const userData: UserState = {
        isLogged: true,
        token: "26P",
        userName: "Jan",
      };

      const { payload: result } = logInUserActionCreator(userData);

      const expected: UserState = {
        isLogged: true,
        token: "26P",
        userName: "Jan",
      };

      expect(result).toStrictEqual(expected);
    });
  });
});
