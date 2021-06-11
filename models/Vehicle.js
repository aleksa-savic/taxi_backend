const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "vehicle";
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
      required: ["licence_plate", "is_caravan"],

      properties: {
        id: { type: "uuid" },
        licence_plate: { type: "string" },
        is_caravan: { type: "bool" },
      },
    };
  }
}
