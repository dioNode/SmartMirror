function moveBrightness(dir){

  brightness = $("#overlay-container").css("background-color");
  console.log(brightness);

  numIntervals = 5;
  maxBrightness = 1;
  minBrightness = 0;
  jumpIntervals = (maxBrightness-minBrightness)/numIntervals;

  brightness += dir * jumpIntervals;

  if (brightness > maxBrightness){
    brightness = maxBrightness;
  } else if (brightness < minBrightness){
    brightness = minBrightness;
  }

  $("#brightnessBar .slider").animate({
    top : movement
  });

  /*minPos = $("#brightnessBar").offset().top;
  sliderPos = $("#brightnessBar .slider").offset().top;
  maxBrightness = $("#brightnessBar").offset().top+$("#brightnessBar").height();
  maxBrightness -= $("#brightnessBar .slider").height();
  percentBrightness = (sliderPos-minPos) / maxBrightness;*/


  console.log(percentBrightness, sliderPos - minPos);

  /*if (percentBrightness < 0){
    console.log("over");
    percentBrightness = 0;
    $("#brightnessBar .slider").animate({
      top: minPos
    });
  } else if (percentBrightness>1) {
    console.log("under");
    percentBrightness = 1;
    $("#brightnessBar .slider").animate({
      top: maxBrightness
    });
  }*/

  return newBrightness;

  //$("#overlay-container").css('opacity', 1-percentBrightness);
}

function calculateOpacity(brightness) {
  maxOpacity = 0;
  minOpacity = 0.9;
  return (1-brightness)*(minOpacity-maxOpacity);
}
