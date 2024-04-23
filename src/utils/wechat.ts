import axios from "axios";
import { config } from "./config";

export const CLIENT_TYPE_Q0000 = "Q0000";

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
  const res = await fetch.post("/", {
    type: CLIENT_TYPE_Q0000,
    data: {
      wxid,
      msg,
    },
  });

  return res.data;
};
