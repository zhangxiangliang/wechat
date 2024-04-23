import "reflect-metadata";

import { Hono, Context } from "hono";
import { clientRoutes } from "./client.routes";
import { serverRoutes } from "./server.routes";

export const app = new Hono()
  // .route("/client", clientRoutes)
  .route("/server", serverRoutes);

export const fetch = app.fetch;
