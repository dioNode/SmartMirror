var bubbleOn = true;
var bubbleRadius;

$(document).ready(function(){
  $(".blobBtn").jqFloat({
    width: 70,
    height: 300,
    speed: 4000,
    minHeight: -200
  });
  $("#messageBox").on('press',toggleBubbles);
  $(".blobBtn").on('press',openBubble(this));
  $(".blobBtn").on('depress',closeBubble(this));

  bubbleRadius = $(".blobBtn").height();

  $( ".blobBtn" ).hover(
    function() {
      openBubble(this);
    }, function() {
      closeBubble(this);
    }
  );
});

function openBubble(bubble){
  var enlargedHeight = bubbleRadius + 5;
  $(bubble).children().show();
  textWidth = $(bubble).children().outerWidth(true);
  enlargedHeight = $(bubble).children().outerHeight(true);
  enlargedWidth = bubbleRadius + textWidth;
  $(bubble).animate({
    opacity: 0.8,
    width: enlargedWidth,
    height: enlargedHeight
  }, 500);
}

function closeBubble(bubble){
  $(bubble).animate({
    opacity: 0.8,
    width: bubbleRadius,
    height: bubbleRadius
  }, 200)
  $(bubble).children().hide();
}

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
