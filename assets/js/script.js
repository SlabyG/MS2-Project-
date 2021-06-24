function initMap() {
    const myLatLng = { lat: 45.750167579106616, lng: 22.88817136444397 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }