const { config } = require('./../config/config');

//Definimos la direccion de la DB y el tipo de base de datos para cada ambiente

module.exports = {
  development:{
    url: config.dbUrl,
    dialect:'postgres', // or 'mysql' for MySQL and 'sqlite' for SQLite (default:)
  },
  production:{
    url: config.dbUrl,
    dialect:'postgres', // or 'mysql' for MySQL and 'sqlite' for SQLite (default:)
  }
}
