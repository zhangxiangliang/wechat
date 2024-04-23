import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export const clientWechatValidator = zValidator(
  "json",
  z.object({
    data: z.object({}),
    type: z.string().trim(),
  })
);
