const Sequelize = require("sequelize"),
    sequelize = require("../db")

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    username: {
        type: Sequelize.STRING,
    },
    hashed_password: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
});

module.exports = User;