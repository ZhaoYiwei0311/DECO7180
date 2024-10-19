import { state, LoadSuburb } from "./model.js";
import ranksView from "./view/ranksView.js";
import areaView from "./view/areaView.js";
import SuburbController from "./controlArea.js";

// Control the suburb results, which is saved for the api call for the future implementation
const controlSearchResults = async () => {
  try {
    ranksView.render(state.suburbs);
  } catch (err) {
    console.error(err);
  }
};

// Control the suburb details
const controlSuburbs = async () => {
  try {
    let suburbHref = decodeURIComponent(window.location.hash.slice(1));
    const Suburb = state.suburbs[suburbHref];
    areaView.render(Suburb);
  } catch (err) {
    console.error(err);
  }
};

// Control the sorted results
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

// Control the search
const controlSearch = function () {
  const searchForm = document.querySelector(".search");

  const searchInput = document.querySelector(".search-field");

  searchInput.addEventListener("input", async function (event) {
    // event.preventDefault();
    let inputValue = searchInput.value.trim();
    // alert(inputValue)
    await LoadSuburb(inputValue);
    console.log(state.suburbs);
    ranksView.render(state.suburbs);
  });

  searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

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

// Control Search Suggestions
const controlSearchSuggestions = function () {
  let searchInput = document.querySelector(".search-field");
  const suggestionsContainer = document.getElementById("suggestions");

  // Function to display suggestions
  function showSuggestions(suggestions) {
    // Clear previous suggestions
    suggestionsContainer.innerHTML = "";
    if (Object.keys(suggestions).length === 0) {
      suggestionsContainer.innerHTML =
        '<div class="no-suggestions">No suggestions found</div>';
    } else {
      Object.keys(suggestions).forEach((suggestion) => {
        console.log(suggestion);
        const div = document.createElement("li");
        div.textContent = suggestion;

        // When a suggestion is clicked, fill the input and hide the list
        div.addEventListener("click", () => {
          searchBar.value = suggestion;
          suggestionsContainer.style.display = "none";
        });

        suggestionsContainer.appendChild(div);
      });
    }

    suggestionsContainer.style.display = "block"; // Show the suggestions
  }

  searchInput.addEventListener("input", async function (event) {
    event.preventDefault();
    let inputValue = searchInput.value.trim();
    if (inputValue === "") {
      suggestionsContainer.style.display = "none";
      return;
    }
    // alert(inputValue)
    await LoadSuburb(inputValue);
    showSuggestions(state.suburbs);
  });
};

//////////////////////////
// Initialize the controller
const init = function () {
  controlSearchResults();
  controlSortedResults();
  controlSearch();
  controlSearchSuggestions();
  areaView.addHandlerRender(controlSuburbs);
};

/////////////////////////////
init();
