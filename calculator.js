//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//Simple Calculator

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  res.send("The calculation of the given numbers is:" + (n1 + n2));
});

//BMI Calculator

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var pheight = Number(req.body.height);
  var pweight = Number(req.body.weight);
  var bmi = pweight/Math.pow(pheight, 2);
  res.send("Your BMI is : " + bmi );
});

app.listen(3000, function(){
  console.log("Server has been running on port 3000");
});
