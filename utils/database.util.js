const { Sequelize, DataTypes } = require("sequelize");

//Conect to database
const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Colombia.2022",
    port: 5432,
    database: "checkInOut",
});

module.exports = { db, DataTypes };