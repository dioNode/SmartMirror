var RED = "#ff9696";
var GREEN = "#96ff96";
var ORANGE = "#ffc896";
var BLUE = "#9fdcf4";
var WHITE = "#fff";
var cancelTimer;

$(document).ready(function() {
  $("#colorChangeButton").on('press', showColorDialog);
  $("#colorChangeButton").on('click', showColorDialog);

  console.log(localStorage["colour"]);
  changeColor(localStorage["colour"]);

  $(".colorRedBtn").on('press', function(){
    changeColor(RED);
    localStorage["colour"] = RED;
  });
  $(".colorRedBtn").on('click', function(){
    changeColor(RED);
    localStorage["colour"] = RED;
  });
  $(".colorGreenBtn").on('press', function(){
    changeColor(GREEN);
    localStorage["colour"] = GREEN;
  });
  $(".colorGreenBtn").on('click', function(){
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
  cancelTimer = setTimeout(function(){
    changeColor(localStorage["colour"]);
  }, 10000);
}

function changeColor(colour){
  $(".colorBtn").fadeOut();
  $(".colorMenuButton").fadeIn();
  console.log(colour);
  clearTimeout(cancelTimer);

  $(".colorMenuButton").css("background-color", colour);
  $(".slider").css("border-color", colour);
  $(".blobBtn").css("background-color", colour);
  $(".overlay").css("color", colour);
  $("#brightnessBar").css("border-color", colour);
  $("#brightnessFace").css("background-color", colour);
  $("#weather img").attr('fill',colour);
  var rect = $('#weather .colour').css('fill',colour);
  update_greeting_color(colour);
}
