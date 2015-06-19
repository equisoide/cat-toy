var johnnyFive   = require("johnny-five");
var servoBuilder = require("./servo");
var config       = require("./config");
var board        = new johnnyFive.Board();
var laser        = null;

var xServo = new servoBuilder.CustomServo(
	config.X_SERVO_PIN, config.X_SERVO_ANGLE, johnnyFive
);
var yServo = new servoBuilder.CustomServo(
	config.Y_SERVO_PIN, config.Y_SERVO_ANGLE, johnnyFive
);

module.exports.init = function (router) {
    router.route("/laser/on").get(turnOn);
    router.route("/laser/off").get(turnOff);
    router.route("/laser/left").get(moveLeft);
    router.route("/laser/right").get(moveRight);
    router.route("/laser/up").get(moveUp);
    router.route("/laser/down").get(moveDown);
    router.route("/laser/stopx").get(stopX);
    router.route("/laser/stopy").get(stopY);

    board.on("ready", function() {
        xServo.init();
        yServo.init();
        laser = new johnnyFive.Led(config.LASER_PIN);
        laser.off();
        console.log("Laser is ready!");
    });
};

var turnOn = function (req, res) {
    laser.on()
    res.json({message: "Laser turned on..."});
};

var turnOff = function (req, res) {
    laser.off();
    res.json({message: "Laser turned off..."});
};

var moveLeft = function (req, res) {
    xServo.increase();
    res.json({message: "Moving left..."});
};

var moveRight = function (req, res) {
    xServo.decrease();
    res.json({message: "Moving right..."});
};

var moveUp = function (req, res) {
    yServo.increase();
    res.json({message: "Moving up..."});
};

var moveDown = function (req, res) {
    yServo.decrease();
    res.json({message: "Moving down..."});
};

var stopX = function (req, res) {
    xServo.stop();
    res.json({message: "Stopped xServo at " + xServo.position() + " grades"});
};

var stopY = function (req, res) {
    yServo.stop();
    res.json({message: "Stopped yServo at " + yServo.position() + " grades"});
};
