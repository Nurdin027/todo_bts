const Sequelize = require("sequelize"),
    sequelize = require("../db")

const Checklist = sequelize.define("checklist", {
    name: {
        type: Sequelize.STRING,
    },
    color: {
        type: Sequelize.STRING,
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = Checklist;