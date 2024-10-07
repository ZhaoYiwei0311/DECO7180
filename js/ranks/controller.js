import { state } from "./model.js";
import ranksView from "./view/ranksView.js";
import areaView from "./view/areaView.js";
import SuburbController from "./controlArea.js";

const controlSearchResults = async () => {
  try {
    ranksView.render(state.suburbs);
  } catch (err) {
    console.error(err);
  }
};

const controlSuburbs = async () => {
  try {
    let suburbHref = window.location.hash.slice(1);
    suburbHref = suburbHref.replaceAll('%20', ' ')
    if (!suburbHref) return;

    const Suburb = state.suburbs[suburbHref];
    areaView.render(Suburb);
  } catch (err) {
    console.error(err);
  }
};

const controlSortedResults = async () => {
  try {
    // 1) Load search results
    const suburbController = new SuburbController(state.suburbs);
    // 3) Listen for changes on the sort select
    document
      .getElementById("sortSelect")
      .addEventListener("change", function (e) {
        let sortBy = e.target.value;

        // Sort events
        let sortedSuburbs = suburbController.sortSuburbs(sortBy);

        // Update state.events
        state.events = sortedSuburbs;

        // 4) Render results on UI
        resultsView.render(state.suburbs);
        // Reset filter select to default value
        document.getElementById("filterSelect").value = "";
      });
  } catch (err) {
    console.error(err);
  }
};

//////////////////////////

const init = function () {
  controlSearchResults();
  controlSortedResults();
  areaView.addHandlerRender(controlSuburbs);
};

/////////////////////////////
init();
