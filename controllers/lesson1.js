
const emilyRoute = (req, res) => {
    res.send("Hello Rkk | Wrold"); // this function can be well handled in a controller folder
};


const hannahRoute = (req, res) => {
    res.send("Hello Hannah"); // this function can be well handled in a controller folder
};


module.exports = {emilyRoute, hannahRoute};