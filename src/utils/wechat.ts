import axios from "axios";
import { randomSleep, sleep } from "./time";
import { config } from "./config";

export const CLIENT_TYPE_Q0001 = "Q0001";

const fetch = axios.create({
  baseURL: config.app.hookUrl,
  headers: { "Content-Type": "application/json" },
});

export const sendMessage = async ({
  wxid,
  msg,
}: {
  wxid: string;
  msg: string;
}) => {
  try {
    console.log(msg);

    await randomSleep();

    const res = await fetch.post("/", {
      type: CLIENT_TYPE_Q0001,
      data: {
        wxid,
        msg,
      },
    });

    return res.data;
  } catch (e) {
    return null;
  }
};
