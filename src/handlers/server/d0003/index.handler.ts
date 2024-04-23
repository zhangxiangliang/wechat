import { Context } from "hono";
import { serverD0003StockHandler } from "./stock.handler";

export const SERVER_TYPE_D0003 = "D0003";
export enum MESSAGE_TYPE {
  Text = 1,
}

export const serverD0003Handler = async (c: Context) => {
  const body = await c.req.json();
  const { data } = body;

  const message = String(data.msg || "");

  if (data.msgType !== MESSAGE_TYPE.Text) {
    return c.json({
      type: SERVER_TYPE_D0003,
      message: "success",
      body,
      handler: "wechat.handler.ts",
    });
  }

  if (message.includes("*stock")) {
    return await serverD0003StockHandler(c);
  }

  return c.json({
    type: SERVER_TYPE_D0003,
    message: "success",
    body,
    handler: "d0003.index.handler.ts",
  });
};
