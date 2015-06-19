function Controller(url, $) {
	var _laser       = new Laser(url, $);
	var _pressedKeys = {};
	
	var _onKeydown = function (event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		var handleKeydown = function (action) {
			if (typeof _pressedKeys[keycode] !== "boolean") {
				_pressedKeys[keycode] = true;
				action();
			}
		};
		switch (keycode) {
			case 32: handleKeydown(_laser.turnOn);    break;
			case 37: handleKeydown(_laser.moveLeft);  break;
			case 38: handleKeydown(_laser.moveUp);    break;
			case 39: handleKeydown(_laser.moveRight); break;
			case 40: handleKeydown(_laser.moveDown);  break;
		}
	};
	
	var _onKeyup = function (event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		var handleKeyup = function (action) {
			_pressedKeys[keycode] = null;
			action();
		};
		 switch (keycode) {
		    case 32: handleKeyup(_laser.turnOff); break;
			case 37: handleKeyup(_laser.stopX);   break;
			case 38: handleKeyup(_laser.stopY);   break;
			case 39: handleKeyup(_laser.stopX);   break;
			case 40: handleKeyup(_laser.stopY);   break;
		}
	};
	
	return {
		onKeydown: _onKeydown,
		onKeyup:   _onKeyup
	};
}