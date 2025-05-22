import { Client } from "pg";

async function query(queryOptions: { text: string; values?: any[] }) {
  const client = new Client({
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "5432", 10),
    ssl: getSSLConfig(),
  });

  try {
    await client.connect();
    return await client.query(queryOptions);
  } catch (error) {
    console.error("Database query error:", error);
  } finally {
    await client.end();
  }
}

function getSSLConfig() {
  if (process.env.DATABASE_CA) {
    return {
      ca: process.env.DATABASE_CA,
    };
  }

  return process.env.NODE_ENV !== "development"
}

export default {
  query,
};
