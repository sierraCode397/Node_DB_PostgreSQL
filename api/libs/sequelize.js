const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');
let URI = ''

if(config.isProd){
  URI = config.dbUrl;
}else {
  URI = config.dbLocalUrl
}

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
  ssl:true
});

setupModels(sequelize);

module.exports = sequelize;
