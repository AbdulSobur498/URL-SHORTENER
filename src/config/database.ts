import { Pool } from "pg";
require("dotenv").config();

const pool = new Pool({
    user: process.env.DATABASE_USER || "postgres",
    host: process.env.DATABASE_HOST || "localhost",
    database: process.env.DATABASE_NAME || "url_shortener",
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT) || 5432,
    max: 20,
    idleTimeoutMillis: 50000,
    connectionTimeoutMillis: 3000,
});



export default pool;