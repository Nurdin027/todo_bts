const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
});

sequelize.sync({force: false}).then(() => {
    console.log("Database synced");
}).catch((err) => {
    console.log("Database sync error: ", err);
});

module.exports = sequelize;