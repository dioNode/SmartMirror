function initialiseUI() {
  setOverlayObject($('.overlay'));

  registerObject($('.slider'), 1000);

  registerObject($('#colorChangeButton'), 1000);
  registerObject($('.colorRedBtn'), 1000);
  registerObject($('.colorGreenBtn'), 1000);
  registerObject($('.colorOrangeBtn'), 1000);
  registerObject($('.colorBlueBtn'), 1000);

  registerObject($('#messageBox'), 1000);
  $('.blobBtn').each(function(index){
    console.log($(this));
    registerObject($(this), 100);
  });

}
