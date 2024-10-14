import { state } from "../ranks/model.js";
import fakeDataList from "../../data/fakeSuburbData.js";
import avgChartData from "../../data/fakeAvgChartdata.js";
//Get the hash from the URL
const suburbHref = decodeURIComponent(window.location.hash.slice(1));
const Suburb = state.suburbs[suburbHref];
console.log(Suburb);

/////////////////////////////////////////////////////
// Set the heading and total risk score of the suburb
document.querySelector(".subheading").textContent = Suburb.suburb;
document.querySelector(
  ".heading-sec"
).textContent = `Total Risk Score: ${Suburb.score}/100`;

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
    pieHole: 0.4,
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
  // var data = google.visualization.arrayToDataTable([
  //   ["Task", "Hours per Day"],
  //   ["Work", 11],
  //   ["Eat", 2],
  //   ["Commute", 2],
  //   ["Watch TV", 2],
  //   ["Sleep", 7],
  // ]);

  // var options = {
  //   pieHole: 0.4,
  //   width: "100%",
  //   height: "100%",
  // };

  // var chart = new google.visualization.PieChart(
  //   document.getElementById("donutchart")
  // );
  // chart.draw(data, options);
}

function drawFloodBarChart() {
  const suburbFloodCount = Suburb.flood;
  const floodAverage = avgChartData.avgFlood;
  const suburb = Suburb.suburb;
  console.log(suburbFloodCount, floodAverage);

  const dataArr = [["Flood Risk Type", suburb, "Average"]];

  suburbFloodCount.forEach((item, index) => {
    dataArr.push([item.type, item.count, floodAverage[index].count]);
  });

  var data = google.visualization.arrayToDataTable(dataArr);

  var options = {
    width: "100%",
    height: "100%",
    chart: {
      title: "Flood Risk Levels",
      subtitle: "Comparing flood risk types and their counts",
    },
    bars: "horizontal",
    series: {
      0: { axis: "Average" },
      1: { axis: suburb },
    },
    axes: {
      x: {
        Milton: { label: "Number of occurrences (Milton)" },
        Average: { side: "top", label: "Number of occurrences (Average)" },
      },
    },
    backgroundColor: "transparent",
  };

  var chart = new google.charts.Bar(document.getElementById("dual_x_div"));
  chart.draw(data, options);
}

function drawFireLineChart() {
  const bushfireTrend = Suburb.wildfire;
  const aveFireTrend = avgChartData.avgWildfire;
  const suburb = Suburb.suburb;

  const dataArr = [
    ["Year", suburb + " " + "Bushfire Count", "Average Bushfire Count"],
  ];

  bushfireTrend.forEach((item, index) => {
    dataArr.push([item.year.toString(), item.count, aveFireTrend[index].count]);
  });

  const data = google.visualization.arrayToDataTable(dataArr);

  const options = {
    title: "Bushfire Trend Comparison ",
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: "transparent",
  };

  const chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
