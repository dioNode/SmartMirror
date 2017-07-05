$(document).ready(function(){
  var videoWidth = 500;
  var videoHeight = 800;
  var video = document.querySelector("#videoElement");

  function activateWebcam(width, height) {
      var compatibleBrowser = hasUserMedia();
      var videoResolution = getBrowserVideoSettings(compatibleBrowser, width, height);

      if (compatibleBrowser) {
          window.URL = window.URL || window.webkitURL;

          navigator.getUserMedia({
              audio: false,
              video: videoResolution
          },
          function(stream) {
              video.src = window.URL.createObjectURL(stream);
          },
          function(err) {
              console.log("The following error occured: " + err.name);
          });
      } else {
          console.log("getUserMedia not supported");
      }
  }

  function hasUserMedia() {
      navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

      return navigator.getUserMedia;
  }

 function getBrowserVideoSettings(browser, width, height) {
     if (browser === navigator.mozGetUserMedia) {
         return {
             width: width,
             height: height
         };
     } else {
         return {
             mandatory: {
                 minWidth: width,
                 minHeight: height
             }
         };
     }
  }

  activateWebcam(videoWidth, videoHeight);
});
