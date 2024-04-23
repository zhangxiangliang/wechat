import { Context } from "hono";

export const CLIENT_TYPE_Q0001 = "Q0001";

// 发送文本消息
// {
//   "type": "Q0001",
//   "data": {
//     "wxid": "",
//     "msg": "" // 1.消息内支持文本代码，详情见文本代码章节 2.最多支持4096个字符，相当于2048个汉字，请勿超出否则崩溃
//   }
// }
export const clientQ0001Handler = async (c: Context) => {
  const { type, data: { wxid, msg } } = await c.req.json();

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
