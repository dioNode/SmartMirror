$(document).ready(function(){
  /*$( "#brightnessBar").hover(
    function() {
      opacity = calculateTextOpacity(calculateBrightness());
      $(this).animate({opacity: 1},500);
    }, function() {
      $( this ).animate({opacity: 0.2}, 500);
    }
  );*/

  $(".slider").on('press', initiateBrightness);
  $(".slider").on('slide', slideBrightness);
  $(".slider").on('depress', collapseBrightness);
});


function toggleBrightness() {
  if ($("#brightnessFace").is(":visible")){
    collapseBrightness();
  } else {
    initiateBrightness();
  }
}

function initiateBrightness() {
  bar = $("#brightnessFace");
  topPos = $("#brightnessBar .slider").css("top");
  $(bar).css("top",topPos);
  $(bar).show();
  maxHeight = $("#brightnessBar").height() + "px";
  $(bar).animate({
    height:maxHeight,
    top: "0px",
  },500).animate({
    width:"5px"
  }, 500);
  animateRotate($("#brightnessBar .slider"),360);
  $("#brightnessBar .slider").attr('src','img/bright_1.png');
}

function collapseBrightness() {
  bar = $("#brightnessFace");
  topPos = $("#brightnessBar .slider").css("top");
  $(bar).animate({
    width: "1px"
  },500).animate({
    top: topPos,
    height: "0px"
  }, {
    duration: 500,
    complete: function() {
      $(bar).hide();
    }
  });
  $("#brightnessBar .slider").attr('src','img/bright_2.png');
  animateRotate($("#brightnessBar .slider"),-360);
}

function slideBrightness() {
  var slider = $("#brightnessBar .slider");
  var bar = $("#brightnessBar");
  var sliderHeight = $(slider).height();
  var sliderPos = $(slider).offset().top;
  var barHeight = $(bar).height();
  var barPos = $(bar).offset().top;
  var desiredPos = getPosition()[1] + 30;


  var brightness = 1 - ((desiredPos - barPos) / (barHeight - sliderHeight));

  if (brightness > 1) {
    brightness = 1;
    desiredPos = (1-brightness)*(barHeight-sliderHeight) + barPos;
  } else if (brightness < 0) {
    brightness = 0;
    desiredPos = (1-brightness)*(barHeight-sliderHeight) + barPos;
  }
  $(slider).offset({top: desiredPos});


  newOpacity = calculateOpacity(brightness);
  textOpacity = calculateTextOpacity(brightness);

  backgroundColorStr = "rgba(0,0,0,"+ newOpacity +")";
  $("#overlay-container").css("background-color", backgroundColorStr);
  $("#overlay-container div:not(#fadedBackgroundTime)").css("opacity",textOpacity);
}

function moveBrightness(dir){

  //check div available
  if (!$("#brightnessFace").is(":visible")){
    return;
  }

  newBrightness = getBrightness();

  numIntervals = 10;
  maxBrightness = 1;
  minBrightness = 0;
  jumpIntervals = (maxBrightness-minBrightness)/numIntervals;

  newBrightness += dir * jumpIntervals;

  if (newBrightness > maxBrightness){
    newBrightness = maxBrightness;
  } else if (newBrightness < minBrightness){
    newBrightness = minBrightness;
  }

  newOpacity = calculateOpacity(newBrightness);
  textOpacity = calculateTextOpacity(newBrightness);

  backgroundColorStr = "rgba(0,0,0,"+ newOpacity +")";
  $("#overlay-container").css("background-color", backgroundColorStr);
  $("#overlay-container div:not(#fadedBackgroundTime)").css("opacity",textOpacity);

  runAnimation(newBrightness);
}

function runAnimation(brightness) {
  movement = setSliderOffset(brightness) + "px";
  // $("#brightnessBar .slider").animate({
  //   top : movement
  // });

}

function setSliderOffset(brightness){
  slider = $("#brightnessBar .slider");
  bar = $("#brightnessBar");
  sliderHeight = $(slider).height();
  sliderPos = $(slider).offset().top;
  barHeight = $(bar).height();
  barPos = $(bar).offset().top;

  //desiredPos = (1-brightness)*(barHeight-sliderHeight) + barPos;
  desiredPos = getPosition[1] - sliderPos;

  movement = desiredPos - sliderPos;
  $(slider).offset({top: desiredPos});
  return desiredPos - barPos;

}

function calculateOpacity(brightness) {
  maxOpacity = 0;
  minOpacity = 0.7;
  opacity = (1-brightness)*(minOpacity-maxOpacity);
  return opacity;
}

function calculateTextOpacity(brightness){
  minOpacity = 0.7;
  maxOpacity = 1;
  opacity = (maxOpacity-minOpacity)*brightness + minOpacity;
  return opacity;
}

function calculateBrightness(opacity) {
  maxOpacity = 0;
  minOpacity = 0.9;
  return 1-opacity/(minOpacity-maxOpacity);
}

function getBrightness() {
  backgroundColour = $("#overlay-container").css("background-color");
  opacity = backgroundColour.split(",")[3].trim().replace(")","");
  return calculateBrightness(parseFloat(opacity));
}

function animateRotate(myDiv,d) {
  $({deg: 0}).animate(
    {deg: d,
    }, {
        duration: 1000,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $(myDiv).css({
                transform: 'rotate(' + now + 'deg)',
            });
        }
    });
}
