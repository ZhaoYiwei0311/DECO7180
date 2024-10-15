// Purpose: This file contains the controller for the suburb page.
export default class SuburbController {
  constructor(suburbs) {
    this.suburbs = Object.values(suburbs);
  }
  // Function to sort the suburbs based on the selected sort option
  sortSuburbs(sortBy) {
    let sortedSuburbs;
    if (sortBy === "postcode") {
      sortedSuburbs = [...this.suburbs].sort((a, b) => a[sortBy] - b[sortBy]);
    }
    if (
      sortBy === "score" ||
      sortBy === "housePrice" ||
      sortBy === "rentalPrice"
    ) {
      sortedSuburbs = [...this.suburbs].sort((a, b) => b[sortBy] - a[sortBy]);
    }
    if (sortBy === "suburb")
      sortedSuburbs = [...this.suburbs].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
      );

    // Convert the sorted suburbs array to an object
    let sortedSuburbsObject = {};
    sortedSuburbs.forEach((suburbObject) => {
      sortedSuburbsObject[suburbObject.suburb] = suburbObject;
    });

    return sortedSuburbsObject;
  }
}
