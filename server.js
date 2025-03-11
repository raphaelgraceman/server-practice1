//express web server
const express = require("express");
const app = express();

//send a GET request to display info
app.get("/", (req, res) => {
    res.send("Hello Raphael | Wrold"); // this function can be well handled in a controller folder
});

//listen /use port 3000
const port = 3000;

//make the app to listen / use port 
app.listen(process.env.port || port);
console.log("Web server is listening at port", port);