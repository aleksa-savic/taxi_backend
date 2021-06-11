const { Model } = require("objection");

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
