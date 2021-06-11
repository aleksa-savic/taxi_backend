const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "transaction";
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
      required: ["transaction_time", "total_price", "tariff_id", "ride_id"],

      properties: {
        id: { type: "uuid" },
        transaction_time: { type: "string" },
        total_price: { type: "string" },
        tariff_id: { type: "decimal" },
        ride_id: { type: "bool" },
      },
    };
  }

  static get relationMappings() {
    const Ride_Tariff = require("./Ride_Tariff");
    const Ride = require("Ride");

    return {
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ride,
        join: {
          from: "ride.id",
          to: "transaction.",
        },
      },
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ride_Tariff,
        join: {
          from: "ride_tariff.id",
          to: "transaction.ride_tariff_id",
        },
      },
    };
  }
}
