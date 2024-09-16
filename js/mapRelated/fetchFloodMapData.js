// import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
import { geodata } from '../../data/suburb_2_coordinates.js'

let FLOOD_URL = 'https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/flood-awareness-creek/records?where=flood_risk = \'High\'';
var floodResults = [];
// let suburb_data = {};


var data = {
    limit: 100,
    offset: 0,
};

async function fetch_flood_data_every_100(offset) {
    const response = await fetch(`${FLOOD_URL}&limit=100&offset=${offset}`);
    const data = await response.json();
    return data;
}

async function fetch_flood_data() {
    let offset = 0;
    let hasMoreData = true;

    while (hasMoreData) {
        const data = await fetch_flood_data_every_100(offset);
        // Process the data here...
        console.log(data['results']);
        data['results'].forEach((result) => floodResults.push(result));

        if (data['results'].length < 100) {  // If no more data is returned
            hasMoreData = false;  // Stop the loop
        } else {
            offset += 100;  // Increment offset based on the data size
        }
    }

    return load_test();
}

function load_test() {
    let suburb_data = {};
    console.log(floodResults.length, geodata.length);
    // console.log(floodResults)

    for (let i = 0; i < floodResults.length; i++) {
        // console.log(floodResults[i]);
        let flood_coord = floodResults[i].geo_point_2d;
        let flood_range = floodResults[i].shape_length;

        if (flood_coord != null) {
            // console.log(flood_coord);
            for (let j = 0; j < geodata.length; j++) {
                //     console.log(geodata[j].features[0].properties.Name);
                // }

                let suburbName = geodata[j].features[0].properties.Name;
                let suburbCoord = geodata[j].features[0].geometry.coordinates[0][0];

                // Create LatLng objects
                // console.log(flood_coord, suburbCoord);
                let latlng1 = L.latLng([flood_coord.lon, flood_coord.lat]);
                let latlng2 = L.latLng(suburbCoord);

                // console.log(latlng1, latlng2);
                let distance = latlng1.distanceTo(latlng2);
                if (distance < flood_range) {
                    if (suburbName in suburb_data) {
                        suburb_data[suburbName] += 1;
                    } else {
                        suburb_data[suburbName] = 1;
                    }
                }
                // console.log('distance =', distance, flood_range, distance < flood_range, suburbName);
            }
        }
    }
    console.log(suburb_data);
    return suburb_data;
}

function load_flood_data_to_suburbs() {
    floodResults = [];
    return fetch_flood_data();

}

export {load_flood_data_to_suburbs}
