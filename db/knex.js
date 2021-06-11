var environment = process.env.NODE_ENV || "development";
var config = require("../knexfile.js")["development"];

module.exports = require("knex")(config);
