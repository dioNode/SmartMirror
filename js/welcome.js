$( document ).ready(function() {
	console.log(localStorage["name"]);
	console.log(localStorage["surname"]);
});

$('#localStorage').submit(function() {
	localStorage["name"] = $('#name').val();
	localStorage["surname"] = $('#surname').val();
});