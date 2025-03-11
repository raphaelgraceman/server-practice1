//send a GET request to display info
const emilyRoute = (req, res) => {
    res.send("Hello Raphael | Wrold"); // this function can be well handled in a controller folder
};


const hannahRoute = (req, res) => {
    res.send("Hello Hannah | Wrold"); // this function can be well handled in a controller folder
};


module.exports = {emilyRoute, hannahRoute};