// Update with your config settings.
const dotenv = require("dotenv");

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_connection,
  },

  staging: {
    client: "pg",
    connection: {
      database: "ultraTaxi",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
