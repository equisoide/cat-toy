$(function () {
	var controller = new Controller("http://192.168.137.2:3000/api/laser", $);
	
	$(document).keydown(controller.onKeydown);
	$(document).keyup(controller.onKeyup);
});