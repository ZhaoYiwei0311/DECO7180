import { fetchDataAndExport } from "../fetchData/fetchData.js";

function filterFireData(data) {
  const filteredData = data.map((item) => {
    return {
      geoPoint: item.geo_point_2d,
      range: item.shape_area,
      year: item.dateunknow,
    };
  });
  return filteredData;
}

function filterFloodData(data) {
  const filteredData = data.map((item) => {
    return {
      geoPoint: item.geo_point_2d,
      range: item.shape_area,
    };
  });
  return filteredData;
}

window.myAppData = {
  wildfireData: null,
  floodData: null,
};

function downloadData() {
  fetchDataAndExport().then((data) => {
    const wildfireData = filterFireData(data.wildfireData);
    const floodData = filterFloodData(data.floodData);

    downloadAsJSON(wildfireData, "wildfireData.json");
    downloadAsJSON(floodData, "floodData.json");

    window.myAppData.wildfireData = wildfireData;
    window.myAppData.floodData = floodData;

    window.myAppData.wildfireData = data.wildfireData;
    window.myAppData.floodData = data.floodData;

    console.log("Data downloaded");
    console.log("Wildfire Data:", window.myAppData.wildfireData);
    console.log("Flood Data:", window.myAppData.floodData);
  });
}

function downloadAsJSON(data, filename) {
  var dataStr =
    "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", filename);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

// Add event listener for DOMContentLoaded event and call downloadData
document.addEventListener("DOMContentLoaded", downloadData);
