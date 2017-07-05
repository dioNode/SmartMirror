$(document).ready(function(){
  updateTime();
  var t=setInterval(update,1000);
})

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayNames = ["Sun","Mon", "Tues", "Wed", "Thurs","Fri","Sat"];

function update(){
  updateTime();
}

function updateTime(){
  today = new Date();
  day = dayNames[today.getDay()];
  d = today.getDate();
  m = monthNames[today.getMonth()];
  y = today.getFullYear();
  hour = today.getHours();
  min = today.getMinutes();
  sec = today.getSeconds();
  time = convert2Digit(hour)+":"+convert2Digit(min);
  dateString = convert2Digit(d)+" / "+m+" "+y+" "+day;
  $("#date").text(dateString);
  $("#time").text(time)
}

function convert2Digit(num){
  if (num.toString().length == 1){
    return '0'+num;
  } else {
    return num;
  }
}
