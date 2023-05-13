import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();
export const sequelize = new Sequelize(process.env.POSTGRESQLDB_CONNECTION, {
  host: "localhost",
  dialect: "postgres",
});
