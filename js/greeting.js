$(document).ready(function(){
  if (localStorage["name"] && localStorage["surname"]) {
    var name = localStorage["name"];
    var surname = localStorage["surname"];
    var line1 = "Welcome " + name + " " + surname + "!";
    $("#welcome p:first-child").text(line1);
  } else {
    $("#welcome p:first-child").text("");
  }
  if (localStorage["gender"] == "male"){
    $("#welcome p:nth-child(2)").text("You look handsome today.");
  } else if(localStorage["gender"] == "female"){
    $("#welcome p:nth-child(2)").text("You look beautiful today.");
  } else {
    $("#welcome p:nth-child(2)").text("You look amazing today.");
  }
  $("#welcome").hide().delay(2500).fadeToggle();
  var textColor =  $(".overlay").css("color");
  update_greeting_color(textColor);
});

function update_greeting_color(textColor){
  $("#welcome").css("color", textColor);
}
