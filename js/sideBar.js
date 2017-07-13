var bubbleOn = true;
var bubbleRadius;
var bubbleOpenable = false;

$(document).ready(function(){
  $(".blobBtn").jqFloat({
    width: 70,
    height: 300,
    speed: 4000,
    minHeight: -200
  });
  setTimeout(function(){ bubbleOpenable = true; }, 3000);
  $("#messageBox").on('click',toggleBubbles);
  $(".blobBtn").on('press', function(){
    console.log('pressing');
    openBubble(this);
  });
  $(".blobBtn").on('depress', function(){
    console.log('depressing');
    closeBubble(this);
  });

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
  console.log(bubbleOpenable);
  if (bubbleOpenable) {
    var enlargedHeight = bubbleRadius + 5;
    $(bubble).clearQueue();
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
}

function closeBubble(bubble){
  if (bubbleOpenable){
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

}

function shutBubbles(){
  bubble = $(".blobBtn");
  $(bubble).children("p").hide();
  $(bubble).children("img").show();
  $(bubble).css("opacity","0.8").css("width",bubbleRadius).css("height",bubbleRadius);
  // $(bubble).animate({
  //   opacity: 0.8,
  //   width: bubbleRadius,
  //   height: bubbleRadius
  // }, {
  //   duration: 200,
  //   complete: function() {
  //     //$(bubble).jqFloat('play');
  //   }
  // })
}

function toggleBubbles() {

  $("#messageBox").attr("src","img/chat_open.png");

  $(".blobBtn").css("position","relative");
  if (bubbleOn){
    bubbleOpenable = false;
    //close bubbles
    shutBubbles();
    $(".blobBtn").jqFloat('stop');
  } else {
    $(".blobBtn").jqFloat('play');
    $(".blobBtn").jqFloat('start');
    setTimeout(function(){ bubbleOpenable = true; }, 3000);
  }
  bubbleOn = !bubbleOn;
}
