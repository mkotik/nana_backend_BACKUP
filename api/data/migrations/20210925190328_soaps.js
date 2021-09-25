exports.up = async (knex) => {
  await knex.schema.createTable("soaps", (tbl) => {
    tbl.increments("soap_id");
    tbl.string("name").unique().notNullable();
    tbl.string("ingredients").notNullable();
    tbl.float("price").notNullable();
    tbl.boolean("featured").defaultTo(false).notNullable();
    tbl.string("smells_like").notNullable();
    tbl.string("exfoliation").notNullable();
    tbl.integer("inventory").unsigned().notNullable();
    tbl.boolean("body_bar").defaultTo(false).notNullable();
    tbl.boolean("face_bar").defaultTo(false).notNullable();
    tbl.boolean("for_babies").defaultTo(false).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("soaps");
};
