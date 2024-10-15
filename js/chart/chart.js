import {LoadSuburb, state} from "../ranks/model.js";
import fakeDataList from "../../data/fakeSuburbData.js";
import avgChartData from "../../data/fakeAvgChartdata.js";
//Get the hash from the URL
const suburbHref = decodeURIComponent(window.location.hash.slice(1));
const Suburb = state.suburbs[suburbHref];
console.log(Suburb);

/////////////////////////////////////////////////////
// Set the heading and total risk score of the suburb
document.querySelector(".subheading").textContent =
  "🏙️ " + Suburb.suburb + " 🏙️";
document.querySelector(
  ".heading-sec"
).textContent = `Total Risk Score: ${Suburb.score}/100`;
var elem = document.querySelector(".nav-btn");
elem.href = "rank.html#" + Suburb.suburb;

/////////////////////////////////////////
// Set Google Charts Callback
google.charts.load("current", { packages: ["corechart", "bar"] });

google.charts.setOnLoadCallback(function () {
  drawDonutChart();
  drawFireLineChart();
  drawFloodBarChart();
});
////////////////////////////////////////

// Callback that creates and populates a data table

function drawDonutChart() {
  const crime = Suburb.crime;
  const suburb = Suburb.suburb;

  const dataArr = [["Crime Type", "Count"]];
  crime.forEach((item) => dataArr.push([item.type, item.count]));

  const data = google.visualization.arrayToDataTable(dataArr);

  const options = {
    title: `Crime Statistics for ${suburb}`,
    backgroundColor: "transparent",
    pieHole: 0.5,
    fontSize: 16,
    titleTextStyle: {
      fontSize: 20,
      color: "#384A67",
    },

    colors: [
      "#364859",
      "#3C6482",
      "#6189AE",
      "#86AED9",
      "#BFB084",
      "#D9BD57",
      "#E2A532",
      "#E69225",
      "#DD7E1E",
      "#DA5B17",
      "#F8EDED",
      "#FFFFFF",
    ],
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

function drawFireLineChart() {
  const bushfireTrend = Suburb.wildfire;
  const aveFireTrend = avgChartData.avgWildfire;
  const suburb = Suburb.suburb;

  const dataArr = [
    ["Year", suburb + " " + "Bushfire Cases", "Average Bushfire Cases"],
  ];

  bushfireTrend.forEach((item, index) => {
    dataArr.push([item.year.toString(), item.count, aveFireTrend[index].count]);
  });

  const data = google.visualization.arrayToDataTable(dataArr);

  const options = {
    title: "Bushfire Trend Comparison",
    fontSize: 16,
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: "transparent",
    titleTextStyle: {
      fontSize: 20,
      color: "#384A67",
    },
    colors: ["#DA5B17", "#F3C623"],
    series: {
      0: { lineWidth: 3.5 },
      1: { lineWidth: 3.5 },
    },
  };

  const chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}

function drawFloodBarChart() {
  const suburbFloodCount = Suburb.flood;
  const floodAverage = avgChartData.avgFlood;
  const suburb = Suburb.suburb;

  const dataArr = [["Flood Risk Type", suburb, "Average"]];

  suburbFloodCount.forEach((item, index) => {
    dataArr.push([item.type, item.count, floodAverage[index].count]);
  });

  var data = google.visualization.arrayToDataTable(dataArr);

  var options = {
    backgroundColor: "transparent",
    fontSize: 16,
    title: "Flood Occurrences Comparison Last 5 Years",
    titleTextStyle: {
      fontSize: 20,
      color: "#384A67",
      bold: true,
    },
    titlePosition: "in",
    colors: ["#6189AE", "#86AED9"],
    bars: "horizontal",
    hAxis: {
      title: "Number of Flood Occurrences Last 5 Years",
      textStyle: {
        fontSize: 16,
      },
    },
    vAxis: {
      title: "Flood Risk Type",
      textStyle: {
        fontSize: 16,
      },
    },
  };

  var chart = new google.charts.Bar(document.getElementById("dual_x_div"));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

///////////////////////////////////////////////////
// Search Form Event Listener

function matchSuburb(inputValue, suburbs) {
  for (let suburbKey in suburbs) {
    if (suburbKey.toLowerCase().includes(inputValue.toLowerCase())) {
      return suburbKey;
    }
  }
  return null;
}

const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = document.querySelector(".search-field").value.trim();
  const matchedSuburb = matchSuburb(inputValue, state.suburbs);
  if (matchedSuburb) {
    window.location.hash = encodeURIComponent(matchedSuburb);
    const newSuburb = state.suburbs[matchedSuburb];
    document.querySelector(".subheading").textContent =
      "🏙️ " + newSuburb.suburb + " 🏙️";
    document.querySelector(
      ".heading-sec"
    ).textContent = `Total Risk Score: ${newSuburb.score}/100`;
    location.reload();
    document.querySelector(".search-field").value = "";
  } else {
    console.log("No matched suburb found.");
  }
});

let searchInput = document.querySelector(".search-field");
const suggestionsContainer = document.getElementById('suggestions');

// Function to display suggestions
function showSuggestions(suggestions) {

  // Clear previous suggestions
  suggestionsContainer.innerHTML = '';
  if (Object.keys(suggestions).length === 0) {
    suggestionsContainer.innerHTML = '<div class="no-suggestions">No suggestions found</div>';
  } else {
    Object.keys(suggestions).forEach(suggestion => {
      console.log(suggestion)
      const div = document.createElement('li');
      div.textContent = suggestion;

      // When a suggestion is clicked, fill the input and hide the list
      div.addEventListener('click', () => {
        searchBar.value = suggestion;
        suggestionsContainer.style.display = 'none';
      });

      suggestionsContainer.appendChild(div);
    });
  }

  suggestionsContainer.style.display = 'block'; // Show the suggestions
}
searchInput.addEventListener('input', async function(event){
  // event.preventDefault();

  let inputValue = searchInput.value.trim();

  if (inputValue === '' ) {
    suggestionsContainer.style.display = 'none';
    return;
  }
  // alert(inputValue)
  await LoadSuburb(inputValue);
  showSuggestions(state.suburbs);


})

