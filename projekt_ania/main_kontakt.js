var mymap = L.map("mapka").setView([52.253191, 20.900147], 12);

var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

mymap.addLayer(lyrOSM);

var myIcon = L.icon({
    iconUrl: 'img/iconb.png',
    iconSize: [20, 34],
    iconAnchor: [10, 34],

})

L.marker([52.253191, 20.900147],{icon: myIcon}).addTo(mymap);