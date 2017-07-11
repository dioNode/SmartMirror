$(document).ready(function(){
  if (localStorage["name"] && localStorage["surname"]) {
    var name = localStorage["name"];
    var surname = localStorage["surname"];
    var line1 = "Welcome ".concat(name," ", surname, "!");
    $("#welcome p:first-child").text(line1);
    $("#welcome p:nth-child(2)").text("You look beautiful today.");
    $("#welcome").hide().delay(2500).fadeToggle();
  } else {
    $("#welcome").hide()
  }
});
