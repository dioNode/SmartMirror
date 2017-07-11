function initialiseUI() {
  setOverlayObject($('.overlay'));

  registerObject($('.slider'), 2000);
  registerObject($('#messageBox'), 2000);

  $('.slider').on('press', function() {console.log("YAY");});
}
