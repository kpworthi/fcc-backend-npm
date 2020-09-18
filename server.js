var fs = require('fs');
var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
  })

app.get

app.listen(process.env.PORT || 3000, 
            () => console.log("listening..."));