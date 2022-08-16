const express = require("express");
const app = express();
const port = 3000;

//This will setup our server and it will listen for any request on the specified port
app.listen(port,function(){
  console.log(`Server has started on port ${port}`);
})

// app.get() defines what should happen when someone makes a "get" request to the home route
//Then there is a callback function that tells the server what to do when that request happens
//the callback function is trigerred which gets two input object parameters "request" and "response" 
//using "response" we can send back a response to the browser

app.get("/",function(req,res){
  res.send("Welcome to my server");
})

//This is a different route, so when browser sends a "get" request at localhost:3000/contact the server will respond
app.get("/contact",function(req,res){
  res.send("Contact me at Mars radio");
})

//Similar to previous section this is another route
app.get("/about",function(req,res){
  res.send("I am a full stack web developer");
})
