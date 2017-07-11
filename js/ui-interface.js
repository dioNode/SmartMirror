var overlayObject;
var TOLERANCE = 50;
var registeredObjects = [];

function regObject(jqObject, time) {
  var pos = getObjPosition(jqObject);
  this.obj = jqObject;
  this.time = time;
  this.pressed = false;
  this.presstime = null;
  this.x = function() {return getObjPosition(jqObject)[0];};
  this.y = function() {return getObjPosition(jqObject)[1];};
  this.width = function() {return this.obj[0].scrollWidth;};
  this.height = function() {return this.obj[0].scrollHeight;};
}

function registerObject(jqObject, time) {
  registeredObjects.push(new regObject(jqObject, time));
}

function isInBounds(regobject) {
  var position = getPosition();
  if (position[0] > regobject.x() - TOLERANCE && position[0] < regobject.x() + regobject.width() + TOLERANCE &&
    position[1] > regobject.y() - TOLERANCE && position[1] < regobject.y() + regobject.height() + TOLERANCE) {
    return true;
  }
  return false;
}


function setOverlayObject(overlayObject) {
  this.overlayObject = overlayObject;
}

function getObjPosition(jqObject) {
  var objOffset = jqObject.offset();
  var overlayOffset = overlayObject.offset();
  return [objOffset.left - overlayOffset.left,
    objOffset.top - overlayOffset.top];
}


function checkUI() {
  for (var i = 0; i < registeredObjects.length; i++) {
    if (isInBounds(registeredObjects[i])) {
      if (registeredObjects[i].presstime == null && !registeredObjects[i].pressed) {
        registeredObjects[i].presstime = new Date();
      } else if (registeredObjects[i].pressed) {
        registeredObjects[i].obj.trigger('slide');
      } else {
        if (Math.floor((new Date() - registeredObjects[i].time)/60) < registeredObjects[i].presstime) {
          registeredObjects[i].obj.trigger('press');
          registeredObjects[i].pressed = true;
          registeredObjects[i].presstime = null;
        }
      }
    } else {
      if (registeredObjects[i].pressed) {
        registeredObjects[i].obj.trigger('depress');
        registeredObjects[i].pressed = false;
      }

      if (registeredObjects[i].presstime != null) {
        registeredObjects[i].presstime = null;
      }
    }
  }
}
