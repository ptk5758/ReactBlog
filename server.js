const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

const multer = require('multer');
const upload = multer({dest: './upload'});

connection.connect();
app.get('/api/Abilitys', (req,res) => {
  connection.query(
    "select * from ability",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.use('/img' , express.static('./upload'));
app.post('/api/Abilitys', upload.single('img'), (req,res) => {

  let sql = "insert into ability (name,img) values (?,?)";
  let name = req.body.name;
  let img = "/img/"+req.file.filename;
  let param = [name,img];
  connection.query(sql, param, (err,rows,fields)=>{
    res.send(rows);
    console.log(err);
  });

});
app.listen(port, () => {
    console.log(`서버 동작중 ${port}`);
});
