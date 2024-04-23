import axios from "axios";

import { config } from "@utils/config";
import { randomSleep } from "@utils/time";

const WECHAT_TYPE_Q0001 = "Q0001";

const fetch = axios.create({
  baseURL: config.app.hookUrl,
  headers: { "Content-Type": "application/json" },
});

interface sendMessage {
  wxid: string;
  msg: string;
}

export const sendWechatMessage = async ({ wxid, msg }: sendMessage) => {
  console.info(`${wxid}: ${msg}`);

  await randomSleep();

  const res = await fetch
    .post("/", {
      type: WECHAT_TYPE_Q0001,
      data: { wxid, msg },
    });

  console.log(res.data);

  return res;
};
