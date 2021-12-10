// build your `Resource` model here
const db = require("../../data/dbConfig.js");

function getResources() {
  return db("resources");
}

function getResource() {
  return db("resources as r");
  //Looking at the GP trying to connect the dots
}

module.exports = {
  getResources,
};
