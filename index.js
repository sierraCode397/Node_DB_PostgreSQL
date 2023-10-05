const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, handleSQLError } = require('./middlewares/error.handler');
const { config } = require('./config/config');
const pg = require('pg')

const app = express();
const port = process.env.PORT || 3000;

const pool = new pg.Pool({
  connectionString: config.dbUrl,
  //ssl: true   Solo para desarrollo
})

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co', '*'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  return res.json(result.rows[0])
});

routerApi(app);

app.use(logErrors);
app.use(handleSQLError)
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log('Mi port' +  port);
});
