module.exports = function(sequelize, DataTypes) {
  var Beer = sequelize.define("Beer", {
    beer_name: DataTypes.STRING,
    brewery: DataTypes.STRING,
    abv: DataTypes.INTEGER,
    user_id: DataTypes.STRING
  });
  return Beer;
};
