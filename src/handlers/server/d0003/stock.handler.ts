import { Context } from "hono";
import { stocks } from "stock-api";
import { sendMessage } from "../../../utils/wechat";

export const SERVER_TYPE_D0003 = "D0003";

export const serverD0003StockHandler = async (c: Context) => {
  const body = await c.req.json();

  const { data } = body;
  const message = String(data.msg);

  const code = message.replace("*stock", "").trim();
  const stock = await stocks.netease.getStock(code);

  const msg =
    stock.name === "---"
      ? "没有找到 stock 相关信息"
      : `名称: ${stock.name}, 现价: ${stock.now}, 最低价: ${stock.low}, 最高价: ${stock.high}, 昨日收盘价格: ${stock.yesterday}`;

  await sendMessage({ wxid: data.fromWxid, msg });

  return c.json({
    type: SERVER_TYPE_D0003,
    message: "success",
    handler: "d0003.stock.handler.ts",
    body,
  });
};
