import { Context } from "hono";

export const CLIENT_TYPE_Q0000 = "Q0000";

// 状态检测
// {
//   "type": "Q0000",
//   "data": {}
// }
export const clientQ0000Handler = async (c: Context) => {
  const { type, data: { } } = await c.req.json();

  return c.json({
    "code": 200,
    "msg": "正常",
    "result": {
      "startTimeStamp": "1657120790",
      "startTime": "2022年7月6日23时19分50秒",
      "runTime": "5分53秒",
      "recv": 4,
      "send": 0,
      "wxNum": "DaenMax",
      "nick": "Daen",
      "wxid": "wxid"
    },
    "wxid": "wxid",
    "port": 7716,
    "pid": 20872,
    "flag": "7777",
    "timestamp": "1657121143876"
  });
};
