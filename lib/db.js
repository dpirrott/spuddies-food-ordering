let dbParams = {};
if (!DB_NAME) {
  dbParams.connectionString = `${process.env.DATABASE_URL}?sslmode=require`;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

module.exports = dbParams;
