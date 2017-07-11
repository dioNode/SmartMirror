$( document ).ready(function() {
	console.log(localStorage["name"]);
	console.log(localStorage["surname"]);
});

$('#submit-btn').click(function() {
	localStorage["name"] = $('#name').val();
	localStorage["surname"] = $('#surname').val();
});
