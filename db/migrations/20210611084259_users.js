exports.up = function (knex) {
  return knex.schema.createTable("users", (t) => {
    t.string("username");
    t.string("email");
    t.string("password");
    t.string("first_name");
    t.string("last_name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
//probably wotn do migrations since i have a create script
