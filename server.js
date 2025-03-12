//express web server
const express = require("express");
const app = express();
const indexRoute = require("./routes/index");
 

//listen /use port 3000
const port = 3000;

app.use("/", indexRoute)

//make the app to listen / use port 
app.listen(process.env.port || port);
console.log("Web server is listening at port", + (process.env.port || port));