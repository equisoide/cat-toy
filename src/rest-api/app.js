var express = require("express");
var config  = require("./config");
var laser   = require("./laser");
var app     = express();
var router  = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    	"Access-Control-Allow-Headers",
    	"Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

laser.init(router);
app.use("/api", router);
app.listen(config.PORT);
console.log("Listening on port: " + config.PORT);