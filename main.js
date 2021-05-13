$(document).ready(function () {
  var mymap = L.map("mymap", {
    center: [52.1, 21.0],
    zoom: 10,
    zoomControl: false,
    attributionControl: false,
  });

  var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
  mymap.addLayer(lyrOSM);

  var lyrPRG = L.tileLayer.wms(
    "http://localhost:8080/geoserver/projekt_prge/wms",
    {
      layers: "projekt_prge:Wojewodztwa",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  var lyrGoogleHyb = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
  );
  var lyrSozo = L.tileLayer.wms(
    "http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer",
    {
      layers: "Raster",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );
  var lyrTopo = L.tileLayer.wms(
    "https://mapy.geoportal.gov.pl/wss/service/img/guest/TOPO/MapServer/WMSServer",
    {
      layers: "Raster",
      format: "image/png",
      transparent: "true",
      version: "1.1.1",
    }
  );

  var baseMaps = {
    Openstreetmap: lyrOSM,
    Województwa: lyrPRG,
    "Mapa Topograficzna": lyrTopo,
    "Mapa Sozologiczna": lyrSozo,
    "Google Hybrid": lyrGoogleHyb,
  };

  //polecenie dodania ikonki
  L.control.layers(baseMaps).addTo(mymap);

  L.control
    .scale({ position: "bottomleft", imperial: false, maxWidth: 200 })
    .addTo(mymap);
});
