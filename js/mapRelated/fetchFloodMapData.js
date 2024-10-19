// import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
import {geodata} from "../../data/suburb_2_coordinates.js";
import fakeDataList from "../../data/fakeSuburbData.js";

let FLOOD_URL =
    "https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/flood-awareness-creek/records?where=flood_risk = 'High'";
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

// async function fetch_flood_data() {
//   let offset = 0;
//   let hasMoreData = true;
//
//   while (hasMoreData) {
//     const data = await fetch_flood_data_every_100(offset);
//     // Process the data here...
//     console.log(data["results"]);
//     data["results"].forEach((result) => floodResults.push(result));
//
//     if (data["results"].length < 100) {
//       // If no more data is returned
//       hasMoreData = false; // Stop the loop
//     } else {
//       offset += 100; // Increment offset based on the data size
//     }
//   }
//
//   return load_test();
// }

async function fetch_flood_data() {
    console.log(fakeDataList);
    let res = {};
    for (let i = 0; i < fakeDataList.length; i++) {
        let suburbName = fakeDataList[i]['suburb'];
        let floodData = fakeDataList[i]['flood'];
        for (let j = 0; j < floodData.length; j++) {
            if (floodData[j]['type'] === 'overall') {
                res[suburbName] = floodData[j]['count']
            }
        }

    }

    // return {"Toowong": 100};
    console.log('res = ', res)
    return res;
}

async function fetch_danger_data(type) {
    let res = {};
    for (let i = 0; i < fakeDataList.length; i++) {
        let suburbName = fakeDataList[i]['suburb'];
        if (type === 'overall') {
            res[suburbName] = fakeDataList[i]['score'];
        } else {
            let dangerData = fakeDataList[i][type];
            for (let j = 0; j < dangerData.length; j++) {
                if (dangerData[j]['type'] === 'overall') {
                    res[suburbName] = dangerData[j]['count']
                }
            }
        }


    }
    return res;
}

// function load_test() {
//     let suburb_data = {};
//     console.log(floodResults.length, geodata.length);
//     // console.log(floodResults)
//
//     for (let i = 0; i < floodResults.length; i++) {
//         // console.log(floodResults[i]);
//         let flood_coord = floodResults[i].geo_point_2d;
//         let flood_range = floodResults[i].shape_length;
//
//         if (flood_coord != null) {
//             // console.log(flood_coord);
//             for (let j = 0; j < geodata.length; j++) {
//                 //     console.log(geodata[j].features[0].properties.Name);
//                 // }
//
//                 let suburbName = geodata[j].features[0].properties.Name;
//                 let suburbCoord = geodata[j].features[0].geometry.coordinates[0][0];
//
//                 // Create LatLng objects
//                 // console.log(flood_coord, suburbCoord);
//                 let latlng1 = L.latLng([flood_coord.lon, flood_coord.lat]);
//                 let latlng2 = L.latLng(suburbCoord);
//
//                 // console.log(latlng1, latlng2);
//                 let distance = latlng1.distanceTo(latlng2);
//                 if (distance < flood_range) {
//                     if (suburbName in suburb_data) {
//                         suburb_data[suburbName] += 1;
//                     } else {
//                         suburb_data[suburbName] = 1;
//                     }
//                 }
//             }
//         }
//     }
//     return suburb_data;
// }

function load_flood_data_to_suburbs() {
    floodResults = [];
    return fetch_flood_data();
}

function load_danger_data_to_suburbs(type) {
    return fetch_danger_data(type);
}


export {load_flood_data_to_suburbs, load_danger_data_to_suburbs};
