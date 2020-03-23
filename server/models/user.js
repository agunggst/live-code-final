'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize
  });
  User.associate = function (models) {
    User.hasMany(models.Report, {
      foreignKey: 'user_id'
    })
  };
  return User;
};