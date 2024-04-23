import { Context } from "hono";

//
import { serverD0003GlodHandler } from "@handlers/server/d0003/gold.handler";
import { serverD0003StockHandler } from "@handlers/server/d0003/stock.handler";

export const SERVER_TYPE_D0003 = "D0003";
export enum MESSAGE_TYPE {
  Text = 1,
}

export const serverD0003Handler = async (c: Context) => {
  const { data } = await c.req.json();

  const message = String(data.msg || "");
  console.info(`type: ${SERVER_TYPE_D0003}`);
  console.info(`message: ${message}`);

  if (data.msgType !== MESSAGE_TYPE.Text) {
    return c.json({ type: SERVER_TYPE_D0003, message: "success", handler: "wechat.handler.ts" });
  }

  if (message.includes("*stock")) {
    return await serverD0003StockHandler(c);
  }

  if (message.includes("*gold")) {
    return await serverD0003GlodHandler(c);
  }

  if (message.includes("*每日金价")) {
    return await serverD0003GlodHandler(c);
  }

  if (message.includes("*金价")) {
    return await serverD0003GlodHandler(c);
  }

  return c.json({ type: SERVER_TYPE_D0003, message: "success", handler: "d0003.index.handler.ts" });
};
