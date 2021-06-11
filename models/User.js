const { Model } = require("objection");
const knex = require("../db/knex");
const database = knex({
  client: "pg",
  connection: {
    host: "0.0.0.0",
    user: "postgres",
    password: "postgres",
    database: "ultraTaxi",
  },
});

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return ["id"];
  }
  static get columnNameMappers() {
    return snakeCaseMappers({ upperCase: true });
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["username", "first_name", "last_name", "email", "password"],

      properties: {
        id: { type: "uuid" },
        username: { type: "string" },
        first_name: { type: "string" },
        last_name: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
      },
    };
  }
}
