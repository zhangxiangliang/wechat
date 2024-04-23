import { Context } from "hono";
import { sendMessage } from "../../../utils/wechat";

export const SERVER_TYPE_D0003 = "D0003";

export const serverD0003StockHandler = async (c: Context) => {
  const body = await c.req.json();

  const { data } = body;

  await sendMessage({ wxid: data.fromWxid, msg: "hello world" });

  return c.json({
    type: SERVER_TYPE_D0003,
    message: "success",
    handler: "d0003.stock.handler.ts",
    body,
  });
};
