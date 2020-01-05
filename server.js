const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});


//was not able to set up compatibility of user and individuals listed in friends.js
//unable to get the friend.js information to appear when clicked on the homepage
//was unable to develop a modal pop up

