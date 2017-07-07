function moveBrightness(dir){


  if (dir == -1){
    movement = "+=20px";
  } else {
    movement = "-=20px";
  }

  $("#brightnessBar .slider").animate({
    top : movement
  });

  minPos = $("#brightnessBar").offset().top;
  sliderPos = $("#brightnessBar .slider").offset().top;
  maxBrightness = $("#brightnessBar").offset().top+$("#brightnessBar").height();
  maxBrightness -= $("#brightnessBar .slider").height();
  percentBrightness = (sliderPos-minPos) / maxBrightness;
  

  console.log(percentBrightness, sliderPos - minPos);

  if (percentBrightness < 0){
    console.log("over");
    percentBrightness = 0;
    $("#brightnessBar .slider").animate({
      top: minPos
    });
  } else if (percentBrightness>1) {
    percentBrightness = 1;
    $("#brightnessBar .slider").animate({
      top: maxBrightness
    });
  }

  $("#overlay-container").css('opacity', 1-percentBrightness);
}
