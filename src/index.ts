import "reflect-metadata";

import { serve } from "@hono/node-server";

import { fetch } from "./routes";
import { config } from "./utils/config";
import { dataSource } from "./utils/database";

const port = config.app.port;

async function app() {
  try {
    await dataSource.initialize();
    await serve({ fetch, port });
    console.info("🟢 Database is running");
    console.info(`🟢 Server is running on port ${port}`);
  } catch (error) {
    console.error("🔴 Error:", error);
  }
}

app();
