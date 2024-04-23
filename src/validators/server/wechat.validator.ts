import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export const serverWechatValidator = zValidator(
  "json",
  z.object({
    pid: z.number(),
    port: z.number(),
    wxid: z.string().trim(),

    flag: z.string().trim(),
    des: z.string().trim(),
    type: z.string().trim(),
    timestamp: z.string().trim(),

    data: z.object({}),
  })
);
