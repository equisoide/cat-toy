$(function () {
	var url = "http://192.168.137.2:3000/api/laser";
	var controller = new Controller(url, $);
	
	$(document).keydown(controller.onKeydown);
	$(document).keyup(controller.onKeyup);
});