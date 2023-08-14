import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./dbConfig.js";

console.log(DB_DATABASE);
console.log(DB_HOST);
console.log(DB_USER);
console.log(DB_PORT);
console.log(DB_PASSWORD);

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});