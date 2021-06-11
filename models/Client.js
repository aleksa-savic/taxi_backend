const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "client";
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
      required: ["payment_info", "user_id"],

      properties: {
        id: { type: "uuid" },
        payment_info: { type: "string" },
        user_id: { type: "uuid" },
      },
    };
  }

  static get relationMappings() {
    const User = require("./User");

    return {
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "users.user_id",
          to: "client.user_id",
        },
      },
    };
  }
}
