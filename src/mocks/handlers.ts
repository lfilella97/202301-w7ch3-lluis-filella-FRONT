import { rest } from "msw";
import { robots } from "../store";

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
