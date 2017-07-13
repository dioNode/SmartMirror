$( document ).ready(function() {
	console.log(localStorage["name"]);
	console.log(localStorage["surname"]);
	console.log(localStorage["gender"]);
});

$('#submit-btn').click(function() {
	localStorage["name"] = $('#name').val();
	localStorage["surname"] = $('#surname').val();
	localStorage["gender"] = $('#gender').val();
	location.href = "index";
	return false;
});
