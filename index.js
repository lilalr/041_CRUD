const express = require('express');
let mysql = require('mysql2');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql2lila', 
  database: 'biodata', 
  port: 3308 
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:' + err.stack);
    return;
  }
  console.log('Connection succesfully');
})

