import * as bcrypt from "bcrypt";
import { config } from "./config";

export const hash = (data: string) => bcrypt.hashSync(data, config.app.salt);
