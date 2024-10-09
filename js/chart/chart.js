import { state } from "../ranks/model.js";
import fakeDataList from "../../data/fakeDataMill.js";
//Get the hash from the URL
const suburbHref = window.location.hash.slice(1);
const Suburb = state.suburbs[suburbHref];
console.log(Suburb);
let data = fakeDataList.filter((item) => item.suburb === Suburb)[0];
console.log(data);

/////////////////////////////////////////
// Set Google Charts Callback
google.charts.load("current", { packages: ["corechart", "bar"] });

google.charts.setOnLoadCallback(function () {
  drawChart();
  // drawChart2();
  drawStuff();
  drawChart3();
});
////////////////////////////////////////

// Callback that creates and populates a data table

function drawChart() {
  const crime = fakeDataList[0].crime;
  const suburb = fakeDataList[0].suburb;

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

function drawChart2() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Element");
  data.addColumn("number", "Percentage");
  data.addRows([
    ["Nitrogen", 0.78],
    ["Oxygen", 0.21],
    ["Other", 0.01],
  ]);

  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(
    document.getElementById("myPieChart")
  );
  chart.draw(data, null);
}

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["Galaxy", "Distance", "Brightness"],
    ["Canis Major Dwarf", 8000, 23.3],
    ["Sagittarius Dwarf", 24000, 4.5],
    ["Ursa Major II Dwarf", 30000, 14.3],
    ["Lg. Magellanic Cloud", 50000, 0.9],
    ["Bootes I", 60000, 13.1],
  ]);

  var options = {
    width: "100%",
    height: "100%",

    chart: {
      title: "Nearby galaxies",
      subtitle: "distance on the left, brightness on the right",
    },
    bars: "horizontal", // Required for Material Bar Charts.
    series: {
      0: { axis: "distance" }, // Bind series 0 to an axis named 'distance'.
      1: { axis: "brightness" }, // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      x: {
        distance: { label: "parsecs" }, // Bottom x-axis.
        brightness: { side: "top", label: "apparent magnitude" }, // Top x-axis.
      },
    },
    backgroundColor: "transparent",
  };

  var chart = new google.charts.Bar(document.getElementById("dual_x_div"));
  chart.draw(data, options);
}

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: "transparent",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
