function Laser(url, $) {
	var _performCall = function (action) {
		$.getJSON(url + "/" + action, function (data) {
			console.log(data);
		});
	};
	return {
		turnOn:    function () { _performCall("on");    },
		turnOff:   function () { _performCall("off");   },
		moveLeft:  function () { _performCall("left");  },
		moveRight: function () { _performCall("right"); },
		moveUp:    function () { _performCall("up");    },
		moveDown:  function () { _performCall("down");  },
		stopX:     function () { _performCall("stopx"); },
		stopY:     function () { _performCall("stopy"); }
	};
}