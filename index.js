function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var x = document.getElementById("demo");
 
  function getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
   } else {
     x.innerHTML = "Geolocation is not supported by this browser.";
   }
  }
   
  function showPosition(position) {
   x.innerHTML = "Latitude: " + position.coords.latitude +
   "<br>Longitude: " + position.coords.longitude;
  }