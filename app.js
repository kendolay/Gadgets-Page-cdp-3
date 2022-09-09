const express = require("express");
const gadgets = express();

gadgets.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = gadgets;
