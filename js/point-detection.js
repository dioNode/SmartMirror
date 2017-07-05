window.onload = function() {
  var video = document.getElementById('webcam_video');
  var canvas = document.getElementById('pointTrackDebug');
  var context = canvas.getContext('2d');

  var tracker = new tracking.ColorTracker('cyan');

  tracking.track('#webcam_video', tracker, {
    camera: true
  });

  console.log("Registered colour tracker.");

  tracker.on('track', function(event) {
    console.log("Test");
    context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach(function(rect) {
      context.strokeStyle = "#00FFFF";
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });
};
