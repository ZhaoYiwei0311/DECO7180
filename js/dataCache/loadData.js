import { fetchDataAndExport } from "../fetchData/fetchData.js";
import { fetchCrimeData } from "../fetchData/fetchCrimeData.js";
import {
  filterFireData,
  filterFloodData,
  filterCrimeData,
} from "../helper/filter.js";

function downloadData() {
  fetchDataAndExport()
    .then((data) => {
      const wildfireData = filterFireData(data.wildfireData);
      const floodData = filterFloodData(data.floodData);
      // downloadAsJSON(wildfireData, "wildfireData.json");
      // downloadAsJSON(floodData, "floodData.json");
    })
    .catch((err) => console.error("Error fetching export data:", err));

  fetchCrimeData()
    .then((data) => {
      const crimeData = data
        .filter((result) => result !== null)
        .flatMap(filterCrimeData);
      // downloadAsJSON(crimeData, "crimeData.json");

      // console.log(crimeData);
    })
    .catch((err) => console.error("Error fetching crime data:", err));
}

function downloadAsJSON(data, filename) {
  try {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(data));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", filename);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  } catch (err) {
    console.error("Error downloading as JSON:", err);
  }
}

// Add event listener for DOMContentLoaded event and call downloadData
document.addEventListener("DOMContentLoaded", downloadData);

console.log("Data download script loaded, fetching data...");
