module.exports = function (sequelize, DataTypes) {
    
    var STORM = sequelize.define("Stormevent", {
        BEGIN_YEARMONTH: DataTypes.INTEGER,
        BEGIN_DAY: DataTypes.INTEGER,
        STATE: DataTypes.STRING,
        EVENT_TYPE: DataTypes.STRING,
        INJURIES_DIRECT: DataTypes.INTEGER,
        DEATHS_DIRECT: DataTypes.INTEGER,
        DAMAGE_PROPERTY: DataTypes.STRING,
        BEGIN_LAT: DataTypes.DECIMAL,
        BEGIN_LON: DataTypes.DECIMAL,
        EPISODE_NARRATIVE: DataTypes.TEXT
      });

    return STORM;
};