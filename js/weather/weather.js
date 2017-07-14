$(document).ready(function() {
  var currentCity;
  var currentCountry;
  $.get("https://ipinfo.io", function(response) {
    currentCity = response.city;
    currentCountry = response.country;
  }, "jsonp").done(function() {
    calculateWeather(currentCity,currentCountry);
  });
  console.log(currentCity);
  $("#weather img").svg({
    onLoad: function()
      {
      var svg = $("#weather img").svg('get');
      console.log($(svg));
      svg.load('img/weatherTypes/sunny.svg', {addTo: true,  changeSize: false});
      },
    settings: {}}
  );
});

function calculateWeather(currentCity, currentCountry){
  $.simpleWeather({
    location: currentCity + ', ' + currentCountry,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      $("#location").text('Location: '+weather.city);
      $("#temperature").html(weather.temp+'&deg;'+weather.units.temp);
      $("#wind").text('Wind speed: '+weather.wind.speed+' '+weather.units.speed);
      setWeatherImg(weather.currently);

      $("#weather").fadeIn(3000);

      /*html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      $("#weather").html(html);
      */
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

function setWeatherImg(condition){
  if (condition.indexOf('storm')!==-1){
    $("#weather img").attr('src','img/weatherTypes/shower.svg');
  } else if (condition.indexOf('rain')!==-1){
    $("#weather img").attr('src','img/weatherTypes/rainy.svg');
  } else if (condition.indexOf('snow')!==-1){
    $("#weather img").attr('src','img/weatherTypes/thundershower.svg');
  } else if (condition.indexOf('cloud')!==-1){
    $("#weather img").attr('src','img/weatherTypes/cloudy.svg');
  } else {
    $("#weather img").attr('src','img/weatherTypes/sunny.svg');
  }
}

function findLevel(mph){
  if (mph < 1){
    return 0;
  } else if (mph <= 3){
    return 1;
  } else if (mph <= 7){
    return 2;
  } else if (mph <= 12){
    return 3;
  } else if (mph <= 18){
    return 4;
  } else if (mph <= 24){
    return 5;
  } else if (mph <= 31){
    return 6;
  } else if (mph <= 38){
    return 7;
  } else if (mph <= 46){
    return 8;
  } else if (mph <= 54){
    return 9;
  } else if (mph <= 63){
    return 10;
  } else if (mph <= 72){
    return 11;
  } else if (mph >= 73){
    return 12;
  }
}
