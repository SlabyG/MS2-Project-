

/*  Castle*/
function initMap() {
   // first map
   const myLatLng1 = { lat: 45.749457311570545, lng: 22.888329538529746 };
   const map1 = new google.maps.Map(document.getElementById("map1"), {
    zoom: 17,
    center: myLatLng1,
  })
  new google.maps.Marker({
    position: myLatLng1,
    map1,
    title: "Corvin Castle",
  });
  
   // second map
   const myLatLng2 = { lat: 45.51497735855289, lng: 25.36720661363668 };
   const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 17,
    center: myLatLng2,
  })
  new google.maps.Marker({
    position: myLatLng2,
    map2,
    title: "Bran Castle",
  });
  
   // third map
   const myLatLng3 = { lat: 45.360117274075456, lng: 25.542631569454663 };
   const map3 = new google.maps.Map(document.getElementById("map3"), {
    zoom: 17,
    center: myLatLng3,
  })
  new google.maps.Marker({
    position: myLatLng3,
    map3,
    title: "Peles Castle",
  });
}