import { Context } from "hono";

//
import { SERVER_TYPE_D0003 } from "@handlers/server/d0003/index.handler";
import { getGoldSerive } from "@services/integration/get.gold.service";
import { sendWechatMessage } from "@services/wechat/send.wechat.message.service";

export const serverD0003GlodHandler = async (c: Context) => {
  const { data } = await c.req.json();
  const { now, max, min } = await getGoldSerive();

  await sendWechatMessage({
    wxid: data.fromWxid,
    msg: `名称: gold, 现价: ${now}, 最低价: ${min}, 最高价: ${max}`,
  });

  return c.json({ type: SERVER_TYPE_D0003, message: "success", handler: "d0003.gold.handler.ts" });
};
