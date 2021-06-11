const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "driver";
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
      required: [
        "username",
        "jmbg",
        "driving_licence",
        "personal_vehicle",
        "employed_date",
        "user_id",
      ],

      properties: {
        id: { type: "uuid" },
        jmbg: { type: "string" },
        driving_licence: { type: "string" },
        average_mark: { type: "decimal" },
        personal_vehicle: { type: "bool" },
        employed_date: { type: "date" },
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
          from: "user.user_id",
          to: "driver.user_id",
        },
      },
    };
  }
}
