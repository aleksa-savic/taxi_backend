const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "ride";
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
        "start_location_long",
        "start_location_lat",
        "start_time",
        "driver_id",
        "client_id",
      ],

      properties: {
        id: { type: "uuid" },
        start_location_long: { type: "string" },
        start_location_lat: { type: "string" },
        end_location_long: { type: "decimal" },
        end_location_lat: { type: "bool" },
        start_time: { type: "date" },
        end_time: { type: "uuid" },
        distance_km: { type: "decimal" },
        client_ride_rating: { type: "int" },
        driver_id: { type: "uuid" },
        client_id: { type: "uuid" },
      },
    };
  }

  static get relationMappings() {
    const Driver = require("./Driver");
    const Client = require("./Client");

    return {
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Driver,
        join: {
          from: "driver.id",
          to: "ride.driver_id",
        },
        parent: {
          relation: Model.BelongsToOneRelation,
          modelClass: Client,
          join: {
            from: "client.id",
            to: "ride.client_id",
          },
        },
      },
    };
  }
}
