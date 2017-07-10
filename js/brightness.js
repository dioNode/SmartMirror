function moveBrightness(dir){

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
  $("#overlay-container div").css("opacity",textOpacity);

  runAnimation(newBrightness);
}

function runAnimation(brightness) {
  movement = setSliderOffset(brightness) + "px";
  $("#brightnessBar .slider").animate({
    top : movement
  });

}

function setSliderOffset(brightness){
  // Returns amount of px needed to move
  slider = $("#brightnessBar .slider");
  bar = $("#brightnessBar");
  sliderHeight = $(slider).height();
  sliderPos = $(slider).offset().top;
  barHeight = $(bar).height();
  barPos = $(bar).offset().top;

  desiredPos = (1-brightness)*(barHeight-sliderHeight) + barPos;

  movement = desiredPos - sliderPos;
  //$(slider).offset({top: desiredPos});
  return desiredPos - barPos;

}

function calculateOpacity(brightness) {
  maxOpacity = 0;
  minOpacity = 0.9;
  opacity = (1-brightness)*(minOpacity-maxOpacity);
  return opacity;
}

function calculateTextOpacity(brightness){
  minOpacity = 0.6;
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
