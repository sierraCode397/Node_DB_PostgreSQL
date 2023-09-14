const { Pool } = require('pg'); //Hace un await interno
//Lo que permite compartir de forma mucho mas simple
//Los Queris optenidos

const { config } = require('./../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI});

module.exports = pool;
