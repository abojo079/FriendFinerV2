const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());

require("../FriendFinerV2/routing/apiRoutes")(app);
require("../FriendFinerV2/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});