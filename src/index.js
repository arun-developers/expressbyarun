const express = require("express");
const app = express();
const mysql = require('mysql');
const port = 3000;

const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "test"
})

con.connect(function(err) {
    if(err) throw err;
    console.log('database connection successfully!');
    con.query("select * from post", function(err, result) {
        if(err) throw err;
        console.log(result)
    })
})

app.get("/",(req,res)=>{
    res.status(200).send("hellow world I am looking for a job...");
});
app.get("/about",(req,res)=>{
    res.status(200).send("hellow world please about us...");
});
app.get("/contact/:id",(req,res)=>{
    console.log(req.params);
    res.status(200).send("hellow world please contact us ...");
});
app.get("/temperatur",(req,res)=>{
    res.status(200).send("hellow world please check temperature ...");
});
app.listen(port,()=>{
    console.log(`listinig my port no ${port}`)
});