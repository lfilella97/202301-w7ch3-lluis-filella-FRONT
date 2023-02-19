import { rest } from "msw";
import { robots } from "../store";

const apiUrl = "https://w6chwe-marcel-lluis.onrender.com/robots";

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
