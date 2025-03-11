//express web server
const express = require("express");
const app = express();
const lessonController = require("./controllers/lesson1");


//send a GET request to display info
app.get("/", lessonController.emilyRoute
);

app.get("/hannah", lessonController.hannahRoute
);
//listen /use port 3000
const port = 3000;

//make the app to listen / use port 
app.listen(process.env.port || port);
console.log("Web server is listening at port", port);