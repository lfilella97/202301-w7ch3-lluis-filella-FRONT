import { rest } from "msw";
import robots from "../mocks/robots";

const apiUrl = process.env.REACT_APP_URL_API!;

export const handlers = [
  rest.get(apiUrl, (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        robots,
      })
    );
  }),
];

export const errorHandlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: `Bad request`,
      })
    );
  }),
];
