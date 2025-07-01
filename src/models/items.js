const Sequelize = require("sequelize"),
    sequelize = require("../db")

const Items = sequelize.define("items", {
    checklist_id: {
        type: Sequelize.STRING,
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = Items;