import database from "infra/database";

export async function GET() {
  const updatedAt = new Date().toISOString();

  const databaseResponse = await database.query({
    text: `SELECT current_setting('server_version') AS version,
                  current_setting('max_connections') AS max_connections,
                  count(*) AS current_connections FROM pg_stat_activity
                  WHERE datname = $1;`,
    values: [process.env.DATABASE_NAME],
  });
  const databaseInfo = databaseResponse.rows[0];

  return Response.json({
    updated_at: updatedAt,
    database: {
      version: databaseInfo.version,
      max_connections: parseInt(databaseInfo.max_connections, 10),
      current_connections: parseInt(databaseInfo.current_connections, 10),
    },
  });
}
