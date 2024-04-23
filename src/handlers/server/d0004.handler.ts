import { Context } from "hono";

export const SERVER_TYPE_D0004 = "D0004";

export const serverD0004Handler = async (c: Context) => {
  const body = await c.req.json();

  return c.json({ type: SERVER_TYPE_D0004, message: "success", body });
};
