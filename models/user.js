module.exports = function (sequelize, DataTypes) {
    //do sequelize define for the users table
    let Users = sequelize.define("UsersTest", {
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

    return Users;
};