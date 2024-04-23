import "reflect-metadata";

import { Hono } from "hono";
import { serverRoutes } from "@routes/server.routes";

export const app = new Hono().route("/server", serverRoutes);

export const fetch = app.fetch;
