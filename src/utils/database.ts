import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  synchronize: false,
  entities: ["src/entities/*.entity.ts"],
  migrations: ["src/migrations/*.ts"],

  type: "sqlite",
  database: "database.sqlite",
});
