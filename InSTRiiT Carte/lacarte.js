var map = L.map('map').setView([48.85568, 2.34558], 13);
var marker = L.marker([48.85568, 2.34558]).addTo(map);
var mqTilesAttr = 'Map data © <a href="http://www.openstreetmap.org/" […]">';

L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', { subdomains: '1234', attribution: mqTilesAttr }).addTo(map);

var circle = L.circle([48.594, 7.746], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

marker.bindPopup("Bouh !").openPopup();
circle.bindPopup("Je suis un cercle.");
