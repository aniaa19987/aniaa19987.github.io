var mymap = L.map("map").setView([52, 19], 10);

mymap.locate({ setView: true, maZoom: 12 });

var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

lyrOpentopo = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png'),

lyrGoogleHyb = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'),

lyrGoogleR = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'),

mymap.addLayer(lyrOSM);

var baseMaps = {
    "Openstreetmap": lyrOSM,
    "Google Road":lyrGoogleR,
    "OpenTopoMap":lyrOpentopo,
    "Google Satelita":lyrGoogleHyb,
  };

lyrPowierzchnia = L.tileLayer.wms("http://localhost:8080/geoserver/prge/wms", 
            {
            layers: "	prge:ADMAREA_AFT", 
            format: 'image/png', 
            transparent : 'true', 
            version : '1.1.1'
            });


lyrLinia = L.tileLayer.wms("http://localhost:8080/geoserver/prge/wms", 
            {
            layers: "prge:ADMBNDL_LFT", 
            format: 'image/png', 
            transparent : 'true', 
            version : '1.1.1'
            });

lyrPunkt = L.tileLayer.wms("http://localhost:8080/geoserver/prge/wms", 
            {
            layers: "prge:BRIDGEC_PFT", 
            format: 'image/png', 
            transparent : 'true', 
            version : '1.1.1'
            });

    var overlays = {
                "Powierzchniowe": lyrPowierzchnia,
                "Liniowe": lyrLinia,
                "Punktowe": lyrPunkt
              };

L.control.layers(baseMaps, overlays).addTo(mymap);


