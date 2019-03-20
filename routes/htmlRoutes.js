var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Beer.findAll().then(function(dbExamples) {
      res.render("index");
    });
  });

  // Load example page and pass in an example by id
  app.get("/post", function(req, res) {
    db.Beer.findOne({ where: { id: req.params.id } }).then(function(beers_db) {
      res.render("post", {
        example: beers_db
      });
    });
  });

  app.get("/mybeers", function(req, res) {
    db.Beer.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("mybeers", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
