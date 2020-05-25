const initMap = () => {
  // The location of Uluru
  var uluru = { lat: 47.2558321, lng: 39.6808424 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
};

window.initMap = initMap;
