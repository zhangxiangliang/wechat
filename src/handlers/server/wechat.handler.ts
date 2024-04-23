import { Context } from "hono";

import { SERVER_TYPE_D0001, serverD0001Handler } from "@handlers/server/d0001/index.handler";
import { SERVER_TYPE_D0002, serverD0002Handler } from "@handlers/server/d0002/index.handler";
import { SERVER_TYPE_D0003, serverD0003Handler } from "@handlers/server/d0003/index.handler";
import { SERVER_TYPE_D0004, serverD0004Handler } from "@handlers/server/d0004/index.handler";
import { SERVER_TYPE_D0005, serverD0005Handler } from "@handlers/server/d0005/index.handler";
import { SERVER_TYPE_D0006, serverD0006Handler } from "@handlers/server/d0006/index.handler";
import { SERVER_TYPE_D0000, serverD0000Handler } from "@handlers/server/d0000/index.handler";

export const serverWechatAuthHandler = async (c: Context) => {
  const { type } = await c.req.json();

  switch (type) {
    case SERVER_TYPE_D0000:
      return await serverD0000Handler(c);
    case SERVER_TYPE_D0001:
      return await serverD0001Handler(c);
    case SERVER_TYPE_D0002:
      return await serverD0002Handler(c);
    case SERVER_TYPE_D0003:
      return await serverD0003Handler(c);
    case SERVER_TYPE_D0004:
      return await serverD0004Handler(c);
    case SERVER_TYPE_D0005:
      return await serverD0005Handler(c);
    case SERVER_TYPE_D0006:
      return await serverD0006Handler(c);
    default:
      return await serverD0000Handler(c);
  }
};
