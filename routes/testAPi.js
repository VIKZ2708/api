var express =require('express');
var router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ContestSite",
  });

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected...");
  });
  

router.get("/",function(req,res,next){
    res.send("API IS GETTING INITIATED");
})

router.get("/getposts", (req, res) => {
    let sql = 'SELECT * FROM ContestSite.USERS';
    console.log(sql)
    db.query(sql, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send("results");
    });
});
  

module.exports = router;



