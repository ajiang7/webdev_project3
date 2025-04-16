function initMap(){
	var el = document.getElementById('canvas');

  // feature 1: added controls for zoom, map, scale, street, fullscreen, rotate
  var myMap = new google.maps.Map(el, {
    center: { lat: 41.8356, lng: -87.6259 },
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true
  });
  
  // feature 2: markers for 3 locations
  const locations = [
    { lat: 41.882629, lng: -87.623474, title: "Cloud Gate", about: "Portal to Metal Bean dimension (trust)" },
    { lat: 41.853065, lng: -87.631439, title: "Nine Dragon Wall", about: "There are actually 9 carps trapped in this wall (believe me)" },
    { lat: 41.831750, lng: -87.627311, title: "IIT Tower", about: "Rumor has it that some students refer to this building as the Chicago's Tower of Hell (i would never lie on the internet)" }
  ];

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: myMap,
      title: location.title,
      animation: google.maps.Animation.DROP
    });
  
    // feature 3: clicking the marker display a temporary description
    var infowindow = new google.maps.InfoWindow({
      content: `<h2>${location.title}</h2><p>${location.about}</p>`
    });
  
    marker.addListener('click', function() {
      infowindow.open(myMap, marker);
    });
  });
  
}

window.addEventListener('load', initMap);
