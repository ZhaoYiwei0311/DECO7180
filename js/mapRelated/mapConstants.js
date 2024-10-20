// const MAP_COLORS = [
//   "#e70203",
//   "#e96e6e",
//   "#dbd3d3",
//   "#A6DDAF",
//   "#389446",
// ];
const MAP_COLORS = [
  "#ae1501d6",
  "#dd1a007d",
  "#dbd3d3e1",
  "#4f8100de",
  "#005e0ef2",
];
// const MAP_COLORS = ["#e70203", "#e70203","#389446", "#389446", "#389446"]
let FLOOD_GRADES = [160, 120, 100, 60];
let CRIME_GRADES = [1000, 800, 600, 400];
let WILDFIRE_GRADES = [45, 30, 20, 10];
let OVERALL_GRADES = [85, 70, 60, 50];

const GRADES = {
  OVERALL_GRADES: OVERALL_GRADES,
  FLOOD_GRADES: FLOOD_GRADES,
  CRIME_GRADES: CRIME_GRADES,
  WILDFIRE_GRADES: WILDFIRE_GRADES,
};

const HINTS = ["Very Dangerous", "Dangerous", "Medium", "Safe", "Very Safe"];

export { MAP_COLORS, GRADES, HINTS };
