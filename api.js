const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 8000;


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "password",
    database : "test",

})

con.connect(function(err){
 if(err) throw err;
    console.log('database connection successfully!');
    con.query("select * from user_details", function(err, result) {
        if(err) throw err;
        console.log(result)
    })
})


app.get("/",(req,res)=>{
res.status(201).send("Save data into database...");
});

app.listen(port ,()=>{
   console.log(`To listen my port no ${port}}`)
});
