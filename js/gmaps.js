function initMap() {
  var myLatLng = {lat: 34.8697395, lng: -111.7609896};

  var map = new google.maps.Map(document.getElementById('google-maps'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 7
  });

  var image = {
    url: '../img/icon-map-marker.svg',
    size: new google.maps.Size(27, 27)
  };

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image,
    title: 'Sedona'
  });
}
