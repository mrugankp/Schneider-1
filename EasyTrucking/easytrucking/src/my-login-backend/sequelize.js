const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // This will store your database in a file named database.sqlite
});

module.exports = sequelize;