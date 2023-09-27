const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//Definimos la direccion de la DB y el tipo de base de datos para cada ambiente

module.exports = {
  development:{
    url: URI,
    dialect:'postgres', // or 'mysql' for MySQL and 'sqlite' for SQLite (default:)
  },
  production:{
    url: URI,
    dialect:'postgres', // or 'mysql' for MySQL and 'sqlite' for SQLite (default:)
  }
}
