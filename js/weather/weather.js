$(document).ready(function() {
  var currentCity;
  var currentCountry;
  $.get("https://ipinfo.io", function(response) {
    console.log(response.city, response.country);
    currentCity = response.city;
    currentCountry = response.country;
  }, "jsonp").done(function() {
    calculateWeather(currentCity,currentCountry);
  });
  console.log(currentCity);
});

function calculateWeather(currentCity, currentCountry){
  $.simpleWeather({
    location: currentCity + ', ' + currentCountry,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      $("#location").text(weather.city);
      $("#temperature").html(weather.temp+'&deg;'+weather.units.temp);
      $("#wind").text('Level '+findLevel(weather.wind.speed));

      console.log(weather.units.speed);
      console.log(weather.currently);

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
