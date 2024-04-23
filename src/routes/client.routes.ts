import { Hono } from "hono";

// Handlers
import { clientWechatAuthHandler } from "@handlers/client/wechat.handler";

// Validators
import { clientWechatValidator } from "@validators/client/wechat.validator";

export const clientRoutes = new Hono().post(
  "/wechat/",
  clientWechatValidator,
  clientWechatAuthHandler
);
