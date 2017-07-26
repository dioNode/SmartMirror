var previousPositions = [];
var gestureVelocity = [0, 0];

var POSITION_LENGTH = 15;

var positionCorrection;

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


  var tracker = new tracking.ColorTracker('red');
  tracker.setMinDimension(5);
  tracker.setMaxDimension(100);

  tracking.track('#webcam_video', tracker, {
    camera: true
  });

  console.log("Registered colour tracker.");

  $('#webcam_video').bind("loadedmetadata", function() {
    canvas.width = video.scrollWidth;
    canvas.height = video.scrollHeight;
    positionCorrection = 500 + ((video.scrollWidth - 500) / 2) + 20;
  });

  tracker.on('track', function(event) {
    context.clearRect(0, 0, video.scrollWidth, video.scrollHeight);
    if (event.data.length > 0) {
      rect = event.data[0];
      context.strokeStyle = "#88FF88";
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      newPosition(rect.x + (rect.width / 2), rect.y + (rect.height / 2));
    } else {
      gestureVelocity = [0, 0];
      previousPositions = [];
    }
  });


  testCanvas = document.getElementById("movementCanvas");
  ctx3 = testCanvas.getContext("2d");


  setInterval(function() {
    ctx3.clearRect(0, 0, 10000, 10000);
    ctx3.strokeStyle = "#88FF88";

    ctx3.beginPath();
    ctx3.moveTo(50, 50);
    ctx3.lineTo(50 + gestureVelocity[0] * 2, 50);
    ctx3.stroke();
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.moveTo(50, 50);
    ctx3.lineTo(50, 50 + gestureVelocity[1] * 2);
    ctx3.stroke();
    ctx3.closePath();

    if (getPosition() != null) {
      checkUI();
    }
  }, 100);
}

function newPosition(xPos, yPos) {
  if (previousPositions.length == POSITION_LENGTH) {
    previousPositions.shift();
  }

  previousPositions.push([xPos, yPos]);

  caluclateVelocity();
}

function caluclateVelocity() {
  for (var i = 0; i < 2; i++) {
    var total = 0;
    var len = previousPositions.length;
    for (var j = 1; j < len; j++) {
      total += previousPositions[j][i] - previousPositions[j - 1][i];
    }

    gestureVelocity[i] = total / len;
  }


}


function getVelocity() {
  return gestureVelocity;
}

function getVelocityX() {
  return getVelocity()[0];
}

function getVelocityY() {
  return getVelocity()[1];
}

function getPosition() {
  if (previousPositions.length == 0) {
    return null;
  } else {
    var pos = previousPositions[previousPositions.length - 1];
    return [positionCorrection - pos[0], pos[1]];
  }
}
