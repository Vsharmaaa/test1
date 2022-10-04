var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require('path');
app.get("/", (req, res) => {
    console.log("Express http server listening on "+HTTP_PORT);
});

app.get("/test1", (req, res) => {
   console.log("Express http server listening on "+HTTP_PORT);
  <><h2><b>Declaration</b></h2><text>
        I declare that this test is my own work in accordance with Seneca Academic Policy.
        No part of this test has been copied manually or electronically from any other source.
        <br></br>
        
    </text><a ref="/pages/test1.html">Go to Test1</a>
    <h3 style ="background-color: yellow">Name:<u><b>Vishesh Sharma</b></u>
        <br></br>
        Student Number:<b><u>117431213</u></b></h3></>
        

});
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);