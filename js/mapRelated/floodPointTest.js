import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
var map = L.map('map').setView([-27.4698, 153.0251], 10);

// Define a polygon (Toowong's coordinates as an example)
var toowongPolygon = L.polygon([
    [-27.4844, 152.9827],
    [-27.4932, 152.9845],
    [-27.4991, 152.9771],
    [-27.4908, 152.9715],
    [-27.4844, 152.9827]
]);

// Add polygon to the map (optional)
toowongPolygon.addTo(map);

// Define a point (lat, lon) in question
var pointLatLng = L.latLng(-27.4870, 152.9810);

// Check if the point is within the polygon using contains() method
var isInside = toowongPolygon.getBounds().contains(pointLatLng);

console.log(isInside); // true if the point is within the polygon bounds