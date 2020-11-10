// check if in production or dev
if (process.env.Node_ENV == "production") {
  //production keys
  module.exports = require("./prod");
} else {
  //dev keys
  module.exports = require("./dev");
}
