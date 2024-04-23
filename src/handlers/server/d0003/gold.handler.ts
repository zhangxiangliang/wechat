import axios from "axios";
import { Context } from "hono";
import { sendMessage } from "../../../utils/wechat";
import { SERVER_TYPE_D0003 } from "./index.handler";
import { getCurrentTime } from "../../../utils/time";

export const serverD0003GlodHandler = async (c: Context) => {
  const body = await c.req.json();
  const { data } = body;
  const time = getCurrentTime();

  const res = await axios.get("https://www.sge.com.cn/graph/quotations");
  const times = res.data.times || [];
  const index = times.indexOf(time);

  if (index === -1) {
    await sendMessage({ wxid: data.fromWxid, msg: "没有找到 gold 相关信息" });
  } else {
    const max = res.data.max || 0;
    const min = res.data.min || 0;
    const items = res.data.data || [];
    await sendMessage({
      wxid: data.fromWxid,
      msg: `名称: gold, 现价: ${items[index]}, 最低价: ${min}, 最高价: ${max}`,
    });
  }

  return c.json({
    type: SERVER_TYPE_D0003,
    message: "success",
    handler: "d0003.gold.handler.ts",
    body,
  });
};
