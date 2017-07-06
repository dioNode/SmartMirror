function initialisePointDetection() {
  var video = document.getElementById('webcam_video');
  var canvas = document.getElementById('pointTrackDebug');
  var context = canvas.getContext('2d');


  //   tracking.ColorTracker.registerColor('green', function(r, g, b) {
  //     if (96 < r && r < 122 && 150 < g && g < 255 && 97 < b && b < 169) {
  //       return true;
  //     }
  //
  //   return false;
  // });


  var tracker = new tracking.ColorTracker('cyan');
  tracker.setMinDimension(5);
  tracker.setMaxDimension(100);

  tracking.track('#webcam_video', tracker, {
    camera: true
  });

  console.log("Registered colour tracker.");

  $('#webcam_video').bind("loadedmetadata", function() {
    canvas.width = video.scrollWidth;
    canvas.height = video.scrollHeight;
  });

  tracker.on('track', function(event) {
    context.clearRect(0, 0, video.scrollWidth, video.scrollHeight);
    event.data.forEach(function(rect) {
      context.strokeStyle = "#88FF88";
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    });
  });
}
