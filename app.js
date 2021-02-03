const express=require('express')
const mysql=require ('mysql')
const bodyParser=require ('body-parser')
const app= express ();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Cantrol-Allow-Origin", "*");
    res.header("Access-Cantrol-Allow-Origin", "Origin, X-Requested-with,Content-Type,Accept");
    NodeList();

    
});
//createConnection to mysql

const db = mysql.createConnection({
    host :'127.0.0.1',
    user :'root',
    password :'',
    database :'Employee'
});
//connect with db
db.connect((err)=>{
        if(err){
                console.log('not connected');s
        }
        else{
                console.log('mysql connected');
        }
})
app.listen('3200', ()=> {
    console.log('"server started on port 3200');

})
app.get('/createTable', (req, res) => {
    let sql= 'Create table Employee(Empid int,Name varchar(255),Email VARCHAR(255),Dept VARCHAR(255))'
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        else{
            res.send('Table create');
        }
    }
});
