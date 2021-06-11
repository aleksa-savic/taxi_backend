const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "admin";
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
      required: ["user_id"],

      properties: {
        id: { type: "uuid" },
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
          to: "admin.user_id",
        },
      },
    };
  }
}
