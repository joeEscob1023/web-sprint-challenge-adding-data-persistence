exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 200).notNullable().unique();
      table.string("project_description", 200);
      table.boolean("project_completed", 0); //0 stands for false?
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 200).notNullable().unique();
      table.string("resource_description", 200);
    })
    .createTable("tasks", (table) => {
      table.increments("task_id") +
        table.string("task_description", 200).notNullable();
      table.string("task_notes", 200);
      table.boolean("task_completed", 0);
      table.integer("project_id").notNullable();
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
