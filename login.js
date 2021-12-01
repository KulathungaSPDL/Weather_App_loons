const mysql = require("mysql");
const express = require("express");
// const { resourceLimits } = require("worker_threads");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
var user;
var pass;

const app = express();
app.use("/Assets", express.static("assets"));

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"wa"
});

// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("database successfully connected!");
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/login.html");
})


app.post("/",encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("select * from user where usarname = ? and password = ?",(username,password), function(error, results,fields){
        // if((username = user) && (password = pass)) {
            res.redirect("/index");
        // } else {
        //     res.redirect("/");
        // }
        // res.end();
    })
})

// when login is success
app.get("/index", function(req,res){
    res.sendFile(__dirname + "/index.html")
})

// set app port
app.listen(4000);