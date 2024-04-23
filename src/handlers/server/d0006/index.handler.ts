import { Context } from "hono";

export const SERVER_TYPE_D0006 = "D0006";

export const serverD0006Handler = async (c: Context) => {
  return c.json({ type: SERVER_TYPE_D0006, message: "success", handler: "d0006.index.handler.ts" });
};
