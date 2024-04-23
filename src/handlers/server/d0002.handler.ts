import { Context } from "hono";

export const SERVER_TYPE_D0002 = "D0002";

export const serverD0002Handler = async (c: Context) => {
  const body = await c.req.json();

  return c.json({ type: SERVER_TYPE_D0002, message: "success", body });
};
