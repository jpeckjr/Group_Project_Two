module.exports = function (sequelize, DataTypes) {
    
    var STORM = sequelize.define("stormevents2008", {
        EVENT_TYPE: DataTypes.STRING,
        BEGIN_YEARMONTH: DataTypes.INTEGER,
        BEGIN_DAY: DataTypes.INTEGER,
        INJURIES_DIRECT: DataTypes.INTEGER,
        DEATHS_DIRECT: DataTypes.INTEGER,
        DAMAGE_PROPERTY: DataTypes.STRING,
        BEGIN_LAT: DataTypes.DECIMAL,
        BEGIN_LON: DataTypes.DECIMAL,
        EPISODE_NARRATIVE: DataTypes.STRING
    
      });

    return STORM;
};



















// module.exports = function (sequelize, DataTypes) {
//     //do sequelize define for the disaster events table
//     let Disaster = sequelize.define("DisasterTest", {
//         something: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         },
//         body: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//             len: [1]
//         }
//     });

//     return Disaster;
// };