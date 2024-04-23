import { Context } from "hono";

export const SERVER_TYPE_D0000 = "D0000";

export const serverD0000Handler = async (c: Context) => {
  const body = await c.req.json();

  return c.json({ type: SERVER_TYPE_D0000, message: "success", body });
};
