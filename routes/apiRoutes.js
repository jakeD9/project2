var db = require("../models");

module.exports = function(app) {
  // Get all beers submitted
  app.get("/api/beerlist", function(req, res) {
    db.Beer.findAll({}).then(function(dbBeer) {
      res.json(dbBeer);
    });
  })

  app.get("/api/beerlist/:user_id", function(req,res) {
    // console.log(req)
    db.Beer.findAll({
      where: {
        user_id : req.params.user_id
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
      // console.log(dbBeer);
    })
  })

  // adds new beer from form
  app.post("/api/beerlist", function(req, res) {
    // console.log(req.body);
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
