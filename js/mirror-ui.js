function initialiseUI() {
  setOverlayObject($('.overlay'));

  registerObject($('.slider'), 1000);
  registerObject($('#messageBox'), 1000);

  $('.slider').on('press', function() {console.log("YAY");});
}
