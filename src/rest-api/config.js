module.exports = {
    PORT:          process.env.EXPRESS_PORT || 3000,
    HOST:          process.env.EXPRESS_HOST || "127.0.0.1",
    LASER_PIN:     13,
	X_SERVO_PIN:   10,
	X_SERVO_ANGLE: 180,
	Y_SERVO_PIN:   9,
	Y_SERVO_ANGLE: 180
};