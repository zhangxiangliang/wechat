import { Context } from "hono";

import { getStockService } from "@services/integration/get.stock.service";
import { SERVER_TYPE_D0003 } from "@handlers/server/d0003/index.handler";
import { sendWechatMessage } from "@services/wechat/send.wechat.message.service";

export const serverD0003StockHandler = async (c: Context) => {
  const { data } = await c.req.json();
  const message = String(data.msg);

  const code = message.replace("*stock", "").trim();

  const { name, now, low, high, yesterday } = await getStockService(code);
  await sendWechatMessage({ wxid: data.fromWxid, msg: `名称: ${name}, 现价: ${now}, 最低价: ${low}, 最高价: ${high}, 昨日收盘价格: ${yesterday}` });

  return c.json({ type: SERVER_TYPE_D0003, message: "success", handler: "d0003.stock.handler.ts" });
};
