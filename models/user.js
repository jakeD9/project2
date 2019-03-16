module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user: DataTypes.STRING
  });
  return User;
};
