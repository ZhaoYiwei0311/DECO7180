// Function to get color depending on the value (e.g., population density)

// function getColor(d) {
//   return d > 1000
//     ? "#A9404260"
//     : d > 500
//     ? "#BC474960"
//     : d > 200
//     ? "#C96C6D60"
//     : d > 100
//     ? "#D7919260"
//     : d > 50
//     ? "#E4B5B660"
//     : d > 20
//     ? "#F2DADB60"
//     : d > 10
//     ? "#FED97660"
//     : "#FFFFFF60";
// }

import {geodata} from '../../data/suburb_2_coordinates.js'
import {load_flood_data_to_suburbs} from '../../js/mapRelated/fetchFloodMapData.js'

import {MAP_COLORS, GRADES} from '../../js/mapRelated/mapConstants.js'
// console.log(fakeDataList)
// Initialize the map and set it to a default location (e.g., Brisbane, Australia)

var map;
var dimension = 'OVERALL';
var info;
var geojson;
var legend;
var results;
var grades;
var colors;

function changeDimension() {
    var selectElement = document.getElementById('dimensionSelect');
    dimension = selectElement.value;
    update_map(map);
    // alert("Selected option:" + selectedValue);
}

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.getElementById('dimensionSelect');
    selectElement.addEventListener('change', changeDimension);
});

async function drawMap() {
    map = L.map('map').setView([-27.4698, 153.0251], 14);

// Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    await update_map(map);

    // loadGeoJson(map);

    addInfo(map)


}

async function update_map(map) {
    // results = await load_flood_data_to_suburbs();
    // loadGeoJson(map);
    results = {};
    if (dimension === 'FLOOD') {
        results = await load_flood_data_to_suburbs();
    }
    if (dimension === 'OVERALL') {
        results = await load_flood_data_to_suburbs();
    }
    if (dimension === 'CRIME') {
        results = await load_flood_data_to_suburbs();
    }
    if (dimension === 'WILDFIRE') {
        results = await load_flood_data_to_suburbs();
    }
    grades = GRADES[dimension + '_GRADES'];
    colors = MAP_COLORS[dimension + '_COLORS'];
    loadGeoJson(map);
    addLegend(map)

}

function getColorByDimension(suburb) {

    let suburbData = results[suburb]
    // console.log('suburbData = ' + suburb + " " + suburbData);
    return getRankByDimension(suburbData);
}

function getRankByDimension(suburbData) {
    // alert(suburbData)
    if (suburbData >= grades[0]) {
        return colors[0];
    } else if (suburbData >= grades[1]) {
        return colors[1];
    } else if (suburbData >= grades[2]) {
        return colors[2];
    } else if (suburbData >= grades[3]) {
        return colors[3];
    } else {
        return colors[4];
    }
}

// Function to style each feature (each region)
function style(feature) {
    // let colorss = getColor(feature.properties.Name);
    // alert(colorss)
    return {
        fillColor: getColorByDimension(feature.properties.Name), // Example data
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// Highlight a region when hovered over
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();

    // console.log(layer.feature.properties.Name);
    info.update(layer.feature.properties)
}

// Reset highlight when not hovering
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update()
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
        click: zoomToFeature
    });
}

function getDataBySuburb(suburb) {
    let filteredData = geodata.filter(data => data.features[0].properties.Name == suburb)
}

function loadGeoJson(map) {
    // Load GeoJSON data (for example, district boundaries)
    var geojsonData = geodata;
// Create a GeoJSON layer and add it to the map
    geojson = L.geoJson(geojsonData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
}

function addInfo(map) {
    info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

// method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        if (props != null) {
            getDataBySuburb(props.Name);
            this._div.innerHTML = '<h4>' + dimension + ' MAP</h4>' + (props ?
                '<b>' + props.Name + '</b><br />' + results[props.Name] + ' cases in last 5 years'
                : 'Hover over a state');
        }

    };
    info.addTo(map);
}

function addLegend(map) {
    // Add a legend
    if (legend == null) {
        legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend'),
                labels = [];

            // Loop through density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                if (i === 0) {
                    div.innerHTML +=
                        '<i style="background:' + colors[i] + '"></i> ' +
                        '>' + grades[i] + '<br>';
                } else {
                    div.innerHTML +=
                        '<i style="background:' + colors[i] + '"></i> ' +
                        grades[i] + '&ndash;' + grades[i - 1] + '<br>';
                }
            }
            div.innerHTML +=
                '<i style="background:' + colors[i] + '"></i> ' +
                '<' + grades[grades.length - 1] + '<br>';
            return div;
        };

        legend.addTo(map);
    } else {
        // console.log('updated legend')
        var div = document.querySelector('.info.legend');

        div.innerHTML = ''; // Clear existing content

        for (var i = 0; i < grades.length; i++) {
            if (i === 0) {
                div.innerHTML +=
                    '<i style="background:' + colors[i] + '"></i> ' +
                    '>' + grades[i] + '<br>';
            } else {
                div.innerHTML +=
                    '<i style="background:' + colors[i] + '"></i> ' +
                    grades[i] + '&ndash;' + grades[i - 1] + '<br>';
            }
        }
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            '<' + grades[grades.length - 1] + '<br>';
    }


}

drawMap();
