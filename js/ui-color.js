var RED = "#ff9696";
var GREEN = "#96ff96";
var ORANGE = "#ffc896";
var BLUE = "#9fdcf4";

$(document).ready(function() {
  $("#colorChangeButton").on('press', showColorDialog);

  $(".colorRedBtn").on('press', changeColorRed);
  $(".colorGreenBtn").on('press', changeColorGreen);
  $(".colorOrangeBtn").on('press', changeColorOrange);
  $(".colorBlueBtn").on('press', changeColorBlue);
});


function showColorDialog() {
  $(".colorBtn").fadeIn();
  $(".colorMenuButton").fadeOut();
}

function changeColorRed() {
  $(".colorBtn").fadeOut();
  $(".colorMenuButton").fadeIn();
  console.log("red");

  $(".colorMenuButton").css("background-color", RED);
  $(".slider").css("border-color", RED);
  $(".blobBtn").css("background-color", RED);
  $(".overlay").css("color", RED);
  $("#brightnessBar").css("border-color", RED);
  $("#brightnessFace").css("background-color", RED);
}

function changeColorGreen() {
  $(".colorBtn").fadeOut();
  $(".colorMenuButton").fadeIn();
  console.log("green");

  $(".colorMenuButton").css("background-color", GREEN);
  $(".slider").css("border-color", GREEN);
  $(".blobBtn").css("background-color", GREEN);
  $(".overlay").css("color", GREEN);
  $("#brightnessBar").css("border-color", GREEN);
  $("#brightnessFace").css("background-color", GREEN);
}

function changeColorOrange() {
  $(".colorBtn").fadeOut();
  $(".colorMenuButton").fadeIn();
  console.log("orange");

  $(".colorMenuButton").css("background-color", ORANGE);
  $(".slider").css("border-color", ORANGE);
  $(".blobBtn").css("background-color", ORANGE);
  $(".overlay").css("color", ORANGE);
  $("#brightnessBar").css("border-color", ORANGE);
  $("#brightnessFace").css("background-color", ORANGE);
}

function changeColorBlue() {
  $(".colorBtn").fadeOut();
  $(".colorMenuButton").fadeIn();
  console.log("blue");

  $(".colorMenuButton").css("background-color", BLUE);
  $(".slider").css("border-color", BLUE);
  $(".blobBtn").css("background-color", BLUE);
  $(".overlay").css("color", BLUE);
  $("#brightnessBar").css("border-color", BLUE);
  $("#brightnessFace").css("background-color", BLUE);
}
