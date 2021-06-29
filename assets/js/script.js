

//  Castle maps
function initMaps() {
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

  // Monasteries mpas
  // fourth map
  const myLatLng4 = { lat: 47.517067790762184, lng: 25.864164550461542 };
   const map4 = new google.maps.Map(document.getElementById("map4"), {
    zoom: 17,
    center: myLatLng4,
  })
  new google.maps.Marker({
    position: myLatLng4,
    map4,
    title: "Voronet Monastery",
  }); 
  //fifth map
  const myLatLng5 = { lat: 47.77817357357038, lng: 25.711288128818378 };
   const map5 = new google.maps.Map(document.getElementById("map5"), {
    zoom: 17,
    center: myLatLng5,
  })
  new google.maps.Marker({
    position: myLatLng5,
    map5,
    title: "Sucevita Monastery",
  }); 
  //sixth map
  const myLatLng6 = { lat: 47.86608037279424, lng: 25.59649878444354 };
   const map6 = new google.maps.Map(document.getElementById("map6"), {
    zoom: 17,
    center: myLatLng6,
  })
  new google.maps.Marker({
    position: myLatLng6,
    map6,
    title: "Putna Monastery",
  }); 

}