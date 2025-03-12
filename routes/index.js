// Needed Resources 
const express = require("express")
const router = new express.Router()
const lesson1Controller = require("../controllers/lesson1");

//send a GET request to display info
router.get("/", lesson1Controller.emilyRoute
);

router.get("/hannah", lesson1Controller.hannahRoute
);


module.exports = router;