export const databaseConfig = {
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT ?? 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DBNAME,
};
