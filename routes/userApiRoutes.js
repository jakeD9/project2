var db = require("../models");

module.exports = function(app) {
  //Find all users and return them in json
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    // console.log(req.body);
    db.User.create(
      {
      user: req.body.email
    }
    ).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  
};


// db.Todo.create({
//   text: req.body.text,
//   complete: req.body.complete
// }).then(function(dbTodo) {
//   // We have access to the new todo as an argument inside of the callback function
//   res.json(dbTodo);
// });
