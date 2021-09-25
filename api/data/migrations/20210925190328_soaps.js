exports.up = async (knex) => {
  await knex.schema.createTable("soaps", (tbl) => {
    tbl.increments("soap_id");
    tbl.string("name");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("soaps");
};
