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

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
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
      const query2 = {
        text: 'INSERT INTO symptom(email) VALUES ($1)',
        values: [email]
      }
      pool.query(query2,(err,results2) => {
        if (err) throw err;
        res.json(results.rows[0]);
      })
      
    }
  });
});

app.post('/showSymptom', (req,res) => {
  
  const {email} = req.body;
  const query = {
    text: 'SELECT * FROM symptom WHERE email = $1',
    values: [email]
  };

  pool.query(query,(err,results) => {
    if (err) {
      throw err;
    }
    else {
      res.json({symptom: results.rows})
    }
  });
});

app.post('/editSymptom', (req,res) => {
  const {email,fever,cough,tired,soreThroat,diarrhoea,aches,pinkEye,headache,noTaste,noSmell,rash,shortBreathing,chestPain,diffMove} = req.body;
  const query = {
    text: 'UPDATE symptom SET fever=$2,cough=$3,tired=$4,sorethroat=$5,diarrhoea=$6,aches=$7,pinkeye=$8,headache=$9,notaste=$10,nosmell=$11,rash=$12,shortbreathing=$13,chestpain=$14,diffmove=$15 WHERE email=$1',
    values: [email,fever,cough,tired,soreThroat,diarrhoea,aches,pinkEye,headache,noTaste,noSmell,rash,shortBreathing,chestPain,diffMove]
  };
  pool.query(query,(err,res) => {
    if (err) {
      throw err;
    }
  })
});




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
