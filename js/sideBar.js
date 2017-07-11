$(document).ready(function(){
  $(".blobBtn").jqFloat({
    width: 10,
    height: 200,
    speed: 5000
  }).jqFloat('stop');

  $("#messsageBox").on('press',toggleBubbles);

  var bubbleRadius = $(".blobBtn").height();
  var enlargedHeight = bubbleRadius + 5;

  $( ".blobBtn" ).hover(
    function() {
      textWidth = $(this).children().outerWidth(true)+20;
      enlargedWidth = bubbleRadius + textWidth;
      $(this).animate({
        opacity: 0.8,
        width: enlargedWidth,
        height: enlargedHeight
      }, 500)
      $(this).children().show();
    }, function() {
      $(this).animate({
        opacity: 0.8,
        width: bubbleRadius,
        height: bubbleRadius
      }, 200)
      $(this).children().hide();
    }
  );
});

function toggleBubbles() {
  console.log("working");
  if ($("#messageBox").is(":visible")){
    $(".blobBtn").jqFloat('stop');

  } else {
    $(".blobBtn").fadeIn();
    $(".blobBtn").jqFloat('start');
  }
}
