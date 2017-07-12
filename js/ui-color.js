var RED = "#ff9696";
var GREEN = "#96ff96";
var ORANGE = "#ffc896";
var BLUE = "#9fdcf4";
var WHITE = "#fff";

$(document).ready(function() {
  $("#colorChangeButton").on('press', showColorDialog);

  console.log(localStorage["colour"]);

  if (localStorage["colour"] == RED) {
    changeColor(RED);
  } else if (localStorage["colour"] == GREEN) {
    changeColor(GREEN);
  } else if (localStorage["colour"] == ORANGE) {
    changeColor(ORANGE);
  } else if (localStorage["colour"] == BLUE) {
    changeColor(BLUE);
  } else if (localStorage["colour"] == WHITE) {
    changeColor(WHITE);
  }

  $(".colorRedBtn").on('press', function(){
    changeColor(RED);
    localStorage["colour"] = RED;
  });
  $(".colorGreenBtn").on('press', function(){
    changeColor(GREEN);
    localStorage["colour"] = GREEN;
  });
  $(".colorOrangeBtn").on('press', function(){
    changeColor(ORANGE);
    localStorage["colour"] = ORANGE;
  });
  $(".colorBlueBtn").on('press', function(){
    changeColor(BLUE);
    localStorage["colour"] = BLUE;
  });
  $(".colorWhiteBtn").on('press', function(){
    changeColor(WHITE);
    localStorage["colour"] = WHITE;
  });
});


function showColorDialog() {
  $(".colorBtn").fadeIn();
  $(".colorMenuButton").fadeOut();
}

function changeColor(colour){
  $(".colorBtn").fadeOut();
  $(".colorMenuButton").fadeIn();
  console.log(colour);

  $(".colorMenuButton").css("background-color", colour);
  $(".slider").css("border-color", colour);
  $(".blobBtn").css("background-color", colour);
  $(".overlay").css("color", colour);
  $("#brightnessBar").css("border-color", colour);
  $("#brightnessFace").css("background-color", colour);
  update_greeting_color(colour);
}
