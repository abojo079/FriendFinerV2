const friends = require("../app/data/friend.js");

module.exports = function(app){
app.get("api/friend", function(req, res){
res.json(friends);
});




};