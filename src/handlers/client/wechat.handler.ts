import { Context } from "hono";

import { CLIENT_TYPE_Q0000, clientQ0000Handler } from "@handlers/client/q0000/index.handler";
import { CLIENT_TYPE_Q0001, clientQ0001Handler } from "@handlers/client/q0001/index.handler";
import { CLIENT_TYPE_Q0002, clientQ0002Handler } from "@handlers/client/q0002/index.handler";

export const clientWechatAuthHandler = async (c: Context) => {
  const { type } = await c.req.json();

  switch (type) {
    case CLIENT_TYPE_Q0000: return await clientQ0000Handler(c);
    case CLIENT_TYPE_Q0001: return await clientQ0001Handler(c);
    case CLIENT_TYPE_Q0002: return await clientQ0002Handler(c);
    default: return await clientQ0000Handler(c);
  }
};
