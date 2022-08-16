const express = require("express");
const app = express();
const port = 3000;

//This will setup our server and it will listen for any request on the specified port
app.listen(port,function(){
  console.log(`Server has started on port ${port}`);
})

//Now when a browser makes a get request at home route of the website a callback function is trigerred which gets two input parameters "request" and "response" using "response" we can send back a response to the browser
app.get("/",function(req,res){
  res.send("Welcome to my server");
})

app.get("/contact",function(req,res){
  res.send("Contact me at Mars radio");
})

app.get("/about",function(req,res){
  res.send("I am a full stack web developer");
})
