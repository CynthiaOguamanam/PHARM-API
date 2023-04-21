const mongoose = require("mongoose");
const url = "mongodb://localhost/marketPlace";

const uri =
	"b://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

mongoose.connect(url).then(() => {
	console.log("Database now connected...!");
});
