var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/beerlist", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeer) {
      res.json(dbBeer);
    });
  })

  app.post("/api/beerlist", function(req, res) {
    console.log(req.body);
    db.Beer.create(
      {
        beer_name: req.body.beer_name,
        brewery: req.body.brewery,
        abv: req.body.abv,
        user_id: req.body.user
      }
    ).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // Delete an example by id
  app.delete("/api/beerlist/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
