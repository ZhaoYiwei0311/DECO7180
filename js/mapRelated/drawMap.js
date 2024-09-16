import { geodata } from "../../data/suburb_2_coordinates.js";
// Initialize the map and set it to a default location (e.g., Brisbane, Australia)

var map = L.map("map").setView([-27.4698, 153.0251], 14);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,

  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Function to get color depending on the value (e.g., population density)
function getColor(d) {
  return d > 1000
    ? "#A9404260"
    : d > 500
    ? "#BC474960"
    : d > 200
    ? "#C96C6D60"
    : d > 100
    ? "#D7919260"
    : d > 50
    ? "#E4B5B660"
    : d > 20
    ? "#F2DADB60"
    : d > 10
    ? "#FED97660"
    : "#FFFFFF60";
}

// Function to style each feature (each region)
function style(feature) {
  return {
    fillColor: getColor(feature.properties.CrimeCounts), // Example data
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

// Highlight a region when hovered over
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 3,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });

  layer.bringToFront();
  info.update(layer.feature.properties);
}

// Reset highlight when not hovering
function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

// Zoom to a region when clicked
function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

// Add the event listeners to each feature
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

// Load GeoJSON data (for example, district boundaries)

var geojsonData = geodata;

// Create a GeoJSON layer and add it to the map
var geojson = L.geoJson(geojsonData, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(map);

var info = L.control();

var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML =
    "<h4>US Population Density</h4>" +
    (props
      ? "<b>" +
        props.Name +
        "</b><br />" +
        props.CrimeCounts +
        " people / mi<sup>2</sup>"
      : "Hover over a state");
};

info.addTo(map);

// Add a legend
var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend"),
    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    labels = [];

  // Loop through density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
  }

  return div;
};

legend.addTo(map);
