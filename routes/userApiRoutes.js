var db = require("../models");

module.exports = function(app) {
  //Find all users and return them in json
  app.get("/api/users", function(req, res) {
    console.log(req);
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
