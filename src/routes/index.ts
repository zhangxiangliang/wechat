import "reflect-metadata";

import { Hono } from "hono";
import { serverRoutes } from "@routes/server.routes";
import { clientRoutes } from "@routes/client.routes";

export const app = new Hono()
  .route("/server", serverRoutes)
  .route("/client", clientRoutes);

export const fetch = app.fetch;
