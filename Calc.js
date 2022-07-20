//jshint esversion:6

var express = require ('express');
var path = require ('path');
var bodyParser = require('body-parser');
var stdin=process.openStdin();

const port=process.env.port || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/",(req, res) => {
    res.sendFile(__dirname +"index.html");
    res.sendFile(__dirname+ "public/css/styles.css");
        
document.getElementsByTagName("button");






});

app.post("/", function(request,response){
    console.log();
})







app.listen(port,() => {
        console.log("Server 3000 has started");
    });
