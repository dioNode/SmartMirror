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
  $(".blobBtn").on('press', function(){
    console.log('pressing');
    openBubble(this);
  });
  $(".blobBtn").on('depress', function(){
    console.log('depressing');
    closeBubble(this);
  });

  bubbleRadius = $(".blobBtn").height();

  // $( ".blobBtn" ).hover(
  //   function() {
  //     openBubble(this);
  //   }, function() {
  //     closeBubble(this);
  //   }
  // );
});

function openBubble(bubble){
  var enlargedHeight = bubbleRadius + 5;
  //$(bubble).clearQueue();
  $(bubble).stop();
  //$(bubble).jqFloat('pause');

  $(bubble).children("img").hide();
  $(bubble).children("p").show();
  textWidth = $(bubble).children("p").outerWidth(true);
  enlargedHeight = $(bubble).children("p").outerHeight(true);
  enlargedWidth = bubbleRadius + textWidth;
  $(bubble).animate({
    opacity: 0.8,
    width: enlargedWidth,
    height: enlargedHeight
  }, 500);
}

function closeBubble(bubble){
  $(bubble).children("p").hide();
  $(bubble).children("img").show();
  //$(bubble).jqFloat('unpause');
  $(bubble).animate({
    opacity: 0.8,
    width: bubbleRadius,
    height: bubbleRadius
  }, {
    duration: 200,
    complete: function() {
      $(bubble).jqFloat('play');
    }
  })
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
