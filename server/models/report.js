'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    report: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize
  });
  Report.associate = function (models) {
    Report.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
    Report.belongsTo(models.Country, {
      foreignKey: 'countryId'
    })
  };
  return Report;
};