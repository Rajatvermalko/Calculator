// jshint esversion:6


const express = require ("express");
const https = require ("https");
const bodyParser = require("body-parser");
var stdin=process.openStdin();

const port=process.env.port || 3000
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));


app.get("/",(req, res) => {
        res.sendFile(__dirname +"/index.html");
});

app.post("/", function(request,response){
    console.log();
})










    app.listen(port,() => {
        console.log("Server 3000 has started");
    });
