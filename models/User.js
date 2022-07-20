const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

//create our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define ID column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define Email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }

    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE)

        // pass in our imported sequelize connection
        sequelize,
        //don't automatically create createdAt/updatedAt timestamp field
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }

)

module.exports = User 