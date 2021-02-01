const express = require('express');
const mysql = require('mysql');


//Create connection with mysql
//parameters

const db = mysql.createConnection({
      host : '127.0.0.1',
      user : 'root',
      password : 'test',
      database : 'student'
});

//Connect with db

db.connect((err) => {
      if(err){
            throw err;
            console.log('Database Error', err);
      }
      else{
            console.log('Mysql connected...');
      }
})

const app = express();

app.listen('3200', () => {
      console.log('Server started on port 3200');
})