import { Context } from "hono";

export const SERVER_TYPE_D0005 = "D0005";

export const serverD0005Handler = async (c: Context) => {
  return c.json({ type: SERVER_TYPE_D0005, message: "success", handler: "d0005.index.handler.ts" });
};
