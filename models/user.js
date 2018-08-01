module.exports = function (sequelize, DataTypes) {
    //do sequelize define for the users table
    let Users = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        password: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        password_salt: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });

    return Users;
};