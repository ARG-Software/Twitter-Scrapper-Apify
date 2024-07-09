import { Options } from "@mikro-orm/core";
import { Tweet } from "./src/entities/tweet";
import { SqliteDriver } from "@mikro-orm/sqlite";

const config: Options = {
  entities: [Tweet],
  dbName: "db.sqlite",
  driver: SqliteDriver,
};

export default config;
