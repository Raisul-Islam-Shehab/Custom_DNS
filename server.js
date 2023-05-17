import express from "express"; //requiring express module
var app = express(); //creating express instance
import { writeFileSync } from "fs"; //require fs(file system) module
import request from "request"; //requiring request module

app.get("/", function (req, res) {
  //calling request function
  request("https://www.google.com", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // writing the response to a file named data.html
      writeFileSync("/app/data.html", body);
    }
  });
});

app.listen(3000, function () {
  console.log("Node server is running..");
});