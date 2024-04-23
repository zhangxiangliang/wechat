import axios from "axios";
import { Context } from "hono";
import { sendMessage } from "../../../utils/wechat";
import { SERVER_TYPE_D0003 } from "./index.handler";
import { getCurrentTime } from "../../../utils/time";

export const serverD0003GlodHandler = async (c: Context) => {
  const body = await c.req.json();
  const { data } = body;
  const time = getCurrentTime();

  try {
    const res = await axios.get("https://www.5huangjin.com/data/jin.js");

    const gds = res.data
      .split(";")
      .find((i: string) => i.includes("hq_str_gds_AUTD="));

    const str = gds
      .replace("var hq_str_gds_AUTD=", "")
      .replaceAll('"', "")
      .split(",");

    const now = str[0];
    const max = str[4];
    const min = str[5];

    await sendMessage({
      wxid: data.fromWxid,
      msg: `名称: gold, 现价: ${now}, 最低价: ${min}, 最高价: ${max}`,
    });
  } catch (e) {
    await sendMessage({
      wxid: data.fromWxid,
      msg: `获取 gold 相关信息失败`,
    });
  }

  return c.json({
    type: SERVER_TYPE_D0003,
    message: "success",
    handler: "d0003.gold.handler.ts",
    body,
  });
};
