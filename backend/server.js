const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_ADDRESS || '34.94.244.15',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
  console.log(req.method, 'request:', req.url, JSON.stringify(req.body));
  next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public');
});

app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  pool.query(query, (err, results) => {
    if (err) {
      res.status(400).json('Unable to get user.');
    } else {
      if (results.rows.length < 1) {
        res.status(200).json('Wrong credential');
      } else {
        const isValidPw = bcrypt.compareSync(
          password,
          results.rows[0].password
        );
        if (isValidPw) {
          // console.log(results.rows[0]);
          res.json(results.rows[0]);
        } else {
          res.status(200).json('Wrong credential');
        }
      }
    }
  });
});

app.post('/register', (req, res) => {
  const { name, email, password, dob, city } = req.body;
  const hashPassword = bcrypt.hashSync(password);
  const joined = new Date();
  const query = {
    text:
      'INSERT INTO users(name, email, password, dob, city, joined) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING RETURNING *',
    values: [name, email, hashPassword, dob, city, joined],
  };
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error.stack);
    } else if (results.rows.length < 1) {
      res.status(200).json('Email is not available.');
    } else {
      // console.log(results.rows.length);
      res.json(results.rows[0]);
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
