const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "ride_tariff";
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
      required: ["base_tariff", "rate_per_h_waited", "rate_per_km"],

      properties: {
        id: { type: "uuid" },
        base_tariff: { type: "decimal" },
        rate_per_h_waited: { type: "decimal" },
        rate_per_km: { type: "decimal" },
      },
    };
  }
}
