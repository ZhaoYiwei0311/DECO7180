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
    let suburbHref = decodeURIComponent(window.location.hash.slice(1));
    const Suburb = state.suburbs[suburbHref];
    areaView.render(Suburb);
  } catch (err) {
    console.error(err);
  }
};

const controlSortedResults = async () => {
  try {
    // Load search results
    const suburbController = new SuburbController(state.suburbs);
    // Listen for changes on the sort select
    document
      .getElementById("sortSelect")
      .addEventListener("change", function (e) {
        let sortBy = e.target.value;
        // Sort suburbs
        let sortedSuburbs = suburbController.sortSuburbs(sortBy);
        // Update state.suburbs
        state.suburbs = sortedSuburbs;
        // Render results on UI
        ranksView.render(state.suburbs);
      });
  } catch (err) {
    console.error(err);
  }
};

const controlSearch = function () {
  const searchForm = document.querySelector(".search");

  searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const searchInput = document.querySelector(".search-field");
    const inputValue = searchInput.value.trim();

    for (let suburbKey in state.suburbs) {
      if (suburbKey.toLowerCase().includes(inputValue.toLowerCase())) {
        window.location.hash = encodeURIComponent(suburbKey);
        const matchedSuburb = state.suburbs[suburbKey];
        await areaView.render(matchedSuburb);
        searchInput.value = "";
        break;
      }
    }
  });
};
//////////////////////////

const init = function () {
  controlSearchResults();
  controlSortedResults();
  controlSearch();
  areaView.addHandlerRender(controlSuburbs);
};

/////////////////////////////
init();
