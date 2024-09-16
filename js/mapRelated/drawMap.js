// Function to get color depending on the value (e.g., population density)

function getColor(d) {
  return d > 1000
    ? "#A9404270"
    : d > 500
    ? "#BC474970"
    : d > 200
    ? "#C96C6D70"
    : d > 100
    ? "#D7919270"
    : d > 50
    ? "#E4B5B670"
    : d > 20
    ? "#F2DADB70"
    : d > 10
    ? "#FED97670"
    : "#FFFFFF70";
}

import { geodata } from "../../data/suburb_2_coordinates.js";
import { fakeDataList } from "../../data/test/suburb_2_coordinates.js";
import { load_flood_data_to_suburbs } from "../../js/mapRelated/fetchFloodMapData.js";

import { MAP_COLORS } from "../../js/mapRelated/mapConstants.js";
// console.log(fakeDataList)
// Initialize the map and set it to a default location (e.g., Brisbane, Australia)

var dimension = "Overall";
var info;
var geojson;
var legend;
var results;

function changeDimension() {
  var selectElement = document.getElementById("dimensionSelect");
  var selectedValue = selectElement.value;
  console.log("Selected option:", selectedValue);
}

// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var selectElement = document.getElementById("dimensionSelect");
  selectElement.addEventListener("change", changeDimension);
});

async function drawMap() {
  var map = L.map("map").setView([-27.4698, 153.0251], 10);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  results = await load_flood_data_to_suburbs();
  console.log(resultsa);
  loadGeoJson(map);
  addInfo(map);
  addLegend(map);
}

// Function to get color depending on the value (e.g., population density)
// function getColor(d) {
//   return d > 1000 ? '#800026' :
//       d > 500 ? '#BD0026' :
//           d > 200 ? '#E31A1C' :
//               d > 100 ? '#FC4E2A' :
//                   d > 50 ? '#FD8D3C' :
//                       d > 20 ? '#FEB24C' :
//                           d > 10 ? '#FED976' :
//                               '#FFEDA0';
// }

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

  // console.log(layer.feature.properties.Name);
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

function get_data_by_suburb(suburb) {
  let filteredData = fakeDataList.filter((data) => data.suburb == suburb);
}

function loadGeoJson(map) {
  // Load GeoJSON data (for example, district boundaries)
  var geojsonData = geodata;
  // Create a GeoJSON layer and add it to the map
  geojson = L.geoJson(geojsonData, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);
}

function addInfo(map) {
  info = L.control();

  info.onAdd = function (map) {
    this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
    this.update();
    return this._div;
  };

  // method that we will use to update the control based on feature properties passed
  info.update = function (props) {
    if (props != null) {
      get_data_by_suburb(props.Name);
      this._div.innerHTML =
        "<h4>US Population Density</h4>" +
        (props
          ? "<b>" +
            props.Name +
            "</b><br />" +
            props.CrimeCounts +
            " people / mi<sup>2</sup>"
          : "Hover over a state");
    }
  };

  info.addTo(map);
}

function addLegend(map) {
  // Add a legend
  legend = L.control({ position: "bottomright" });

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
}

drawMap();
