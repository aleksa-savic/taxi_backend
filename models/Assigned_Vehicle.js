const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "assigned_vehicle";
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
      required: ["driver_id", "vehicle_id", "created_at"],

      properties: {
        driver_id: { type: "uuid" },
        vehicle_id: { type: "uuid" },
        created_at: { type: "date" },
        closed_at: { type: "date" },
      },
    };
  }

  static get relationMappings() {
    const Driver = require("./Driver");
    const Vehicle = require("Vehicle");

    return {
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Driver,
        join: {
          from: "driver.id",
          to: "driver_id",
        },
      },
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Vehicle,
        join: {
          from: "vehicle.id",
          to: "vehicle_id",
        },
      },
    };
  }
}
