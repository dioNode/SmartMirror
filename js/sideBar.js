$(document).ready(function(){
  $(".blobBtn").jqFloat({
    width: 10,
    height: 200,
    speed: 5000
  });
  $( ".blobBtn" ).hover(
    function() {
      textWidth = $(this).children().outerWidth(true)+20;
      $(this).animate({
        opacity: 0.8,
        width: "+="+textWidth+"px",
        height: "+=5px",
      }, 500)
      $(this).children().show();
    }, function() {
      $(this).animate({
        opacity: 0.8,
        width: "-="+ textWidth +"px",
        height: "-=5px",
      }, 200)
      $(this).children().hide();
    }
  );
});
