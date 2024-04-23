import { Context } from "hono";

export const SERVER_TYPE_D0001 = "D0001";

export const serverD0001Handler = async (c: Context) => {
  const body = await c.req.json();

  return c.json({ type: SERVER_TYPE_D0001, message: "success", body });
};
