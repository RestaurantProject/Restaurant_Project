var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var ResTable = [
    {
        name: "yoda",
        phoneNum: "3452",
        email: "yoda@starwars.com",
        ID: 1
    },
    {
        name:"t",
        phoneNum: "29381"
    }
];

var waitingList = [ {
        name: "example",
        phoneNum: "320",
        email: "example@rutgers.com",
        ID: 2
    }
];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

var submitTables = function() {
    app.post("/api/new", function(req, res) {
    var newAdd = req.body;
   if (ResTable.length<5) {  
        ResTable.push(newAdd);
    }else {
        waitingList.push(newAdd)
    }
    console.log(newAdd);
 });
};
  
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });

