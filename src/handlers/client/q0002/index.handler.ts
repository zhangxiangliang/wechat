import { Context } from "hono";

export const CLIENT_TYPE_Q0002 = "Q0002";

// 修改下载图片
// {
//   "type": "Q0002",
//   "data": {
//     "type": "23:30-23:30" // “23:30-23:30”为全天下载，“00:01-23:59”为全天不下载
//   }
// }
export const clientQ0002Handler = async (c: Context) => {
  return c.json({
    "code": 200,
    "msg": "操作成功",
    "result": {},
    "wxid": "wxid",
    "port": 7716,
    "pid": 20872,
    "flag": "7777",
    "timestamp": "1657121302946"
  });
};
