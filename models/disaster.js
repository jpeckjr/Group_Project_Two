module.exports = function (sequelize, DataTypes) {
    //do sequelize define for the disaster events table
    let Disaster = sequelize.define("DisasterTest", {
        something: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    return Disaster;
};