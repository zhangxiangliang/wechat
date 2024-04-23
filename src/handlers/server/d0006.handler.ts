import { Context } from "hono";

export const SERVER_TYPE_D0006 = "D0006";

export const serverD0006Handler = async (c: Context) => {
  const body = await c.req.json();

  return c.json({ type: SERVER_TYPE_D0006, message: "success", body });
};
