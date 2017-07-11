var bubbleOn = true;

$(document).ready(function(){
  $(".blobBtn").jqFloat({
    width: 70,
    height: 300,
    speed: 4000,
    minHeight: -200
  });
  $("#messageBox").on('click',toggleBubbles);

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

  $(".blobBtn").css("position","relative");
  if (bubbleOn){
    $(".blobBtn").jqFloat('stop');
    console.log('stopping');
  } else {
    console.log('starting');
    $(".blobBtn").jqFloat('play');
  }
  bubbleOn = !bubbleOn;
}
