import { Hono } from "hono";

// Handlers
import { serverWechatAuthHandler } from "@handlers/server/wechat.handler";

// Validators
import { serverWechatValidator } from "@validators/server/wechat.validator";

export const serverRoutes = new Hono().post(
  "/wechat",
  serverWechatValidator,
  serverWechatAuthHandler
);
