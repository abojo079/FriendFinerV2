const friends = require("../app/data/friend");

module.exports = function(app){
app.get("api/friend", function(req, res){
res.json(friends);
});




};