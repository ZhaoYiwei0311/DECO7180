import { state } from "../ranks/model.js";
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
