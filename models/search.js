module.exports = function (sequelize, DataTypes) {
    
    let Searches = sequelize.define("Search", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        search_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        avoid_destination: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    
    Searches.associate = function(models) {
        Searches.belongsTo(models.User);
    };

    return Searches;
};