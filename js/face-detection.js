 window.onload = function(){
  var video = document.getElementById('videoElement');
  var canvas = document.getElementById('faceTrackDebug');
  var context = canvas.getContext('2d');


  var tracker = new tracking.ObjectTracker('face');

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    event.data.forEach(function(rect) {
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

      console.log('x: ' + rect.x + '    y: ' + rect.y);
    });
  });


  tracking.track('#videoElement', tracker, { camera: true });
};
