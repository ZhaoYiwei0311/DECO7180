import { fetchDataAndExport } from "../fetchData/fetchData.js";
import { fetchCrimeData } from "../fetchData/fetchCrimeData.js";
import {
  filterFireData,
  filterFloodData,
  filterCrimeData,
} from "../helper/filter.js";

// Function to filter and download raw api data
// This function is called when the DOMContentLoaded event is fired
// This function only run once when the page is loaded for the performance reason
function downloadData() {
  fetchDataAndExport()
    .then((data) => {
      console.log(data);
      const wildfireData = filterFireData(data.wildfireData);
      const floodData = filterFloodData(data.floodData);
    })
    .catch((err) => console.error("Error fetching export data:", err));

  fetchCrimeData()
    .then((data) => {
      const crimeData = data
        .filter((result) => result !== null)
        .flatMap(filterCrimeData);

      console.log(crimeData);
    })
    .catch((err) => console.error("Error fetching crime data:", err));
}

// Function to download data as JSON
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
