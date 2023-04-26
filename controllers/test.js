const helloRoute = (req,res) => {
    res.send("Hello there");
};
  
const kenobiRoute = (req,res) => {
    res.send("General Kenobi");
};
  
module.exports = {
    helloRoute,
    kenobiRoute
};