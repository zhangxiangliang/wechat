import "dotenv/config";

const port = Number(process.env.PORT || 8080);
const salt = String(process.env.BCRYPT_SALT || "PUSHMETOP");

const serverUrl = String(
  process.env.SERVER_URL || `http://127.0.0.1:${port}/server`
);

const clientUrl = String(
  process.env.CLIENT_URL || `http://127.0.0.1:${port}/client`
);

const hookUrl = String(process.env.WXHOOK_URL || "");

export const config = {
  app: {
    port,
    salt,

    hookUrl,
    clientUrl,
    serverUrl,
  },
};
