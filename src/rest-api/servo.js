module.exports.CustomServo = function(pin, angle, johnnyFive) {
    var _servo    = null;
    var _minAngle = 90 - (angle / 2);
    var _maxAngle = 90 + (angle / 2);
    var _speed    = 1000;

    var _init = function () {
        _servo = new johnnyFive.Servo({
            pin:    pin,
            center: true,
            range:  [_minAngle, _maxAngle]
        });
    };

    var _increase = function () {
        if (_servo !== null) {
            if (_servo.position < _maxAngle) {
                _servo.to(_maxAngle, _speed);
            }
        }
    };

    var _decrease = function () {
        if (_servo !== null) {
            if (_servo.position > _minAngle) {
                _servo.to(_minAngle, _speed);
            }
        }
    };

     var _stop = function () {
        if (_servo !== null) {
            _servo.stop();
            if (_servo.position < 0) {
                _servo.to(_maxAngle);
            }
        }
    };

    var _position = function () {
        return (_servo !== null ? _servo.position : "");
    };

    return {
        init:     _init,
        increase: _increase,
        decrease: _decrease,
        stop:     _stop,
        position: _position
    };
};

