function initialiseFaceDetection() {
    var video = document.getElementById('webcam_video');
    var canvas = document.getElementById('faceTrackDebug');
    var context = canvas.getContext('2d');


    var tracker = new tracking.ObjectTracker('face');

    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);

    tracking.track('#webcam_video', tracker, {
      camera: true
    });

    console.log("Registered face tracker.");

    $('#webcam_video').bind("loadedmetadata", function() {
      canvas.width = video.scrollWidth;
      canvas.height = video.scrollHeight;
    });


  tracker.on('track', function(event) {
    context.clearRect(0, 0, video.scrollWidth, video.scrollHeight);
    event.data.forEach(function(rect) {
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    });
  });
}
