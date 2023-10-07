const { config } = require('./../config/config');

//Definimos la direccion de la DB y el tipo de base de datos para cada ambiente

let URI = ''

if(config.isProd){
  URI = config.dbUrl;
}else {
  URI = config.dbLocalUrl
}

module.exports = {
  development:{
    url: URI,
    dialect:'postgres', // or 'mysql' for MySQL and 'sqlite' for SQLite (default:)
    ssl: {
      rejectUnauthorized: false
    }
  },
  production:{
    url: URI,
    dialect:'postgres', // or 'mysql' for MySQL and 'sqlite' for SQLite (default:)
  }
}
