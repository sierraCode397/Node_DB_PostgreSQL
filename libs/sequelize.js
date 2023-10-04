const { Sequelize } = require('sequelize');

// const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const sequelize = new Sequelize('postgres://nico:admin123@localhost:5432/my_store', {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
