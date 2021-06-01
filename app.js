const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create connection
const db = mysql.createConnection({
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    password : 'password',
    database : 'ContestSite'
});

//
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

// Select all users
app.get('/getUsers',cors(), (req, res) => {
    let sql = `SELECT * FROM USERS `;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
