var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/beerlist", function(req, res) {
    db.beerlist.findAll({}).then(function(beers_db) {
      res.json(beers_db);
    });
  });

  // Create a new example
  app.post("/api/posts", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/beerlist/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
