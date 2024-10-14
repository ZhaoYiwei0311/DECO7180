export default class SuburbController {
  constructor(suburbs) {
    this.suburbs = Object.values(suburbs);
  }

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

    let sortedSuburbsObject = {};
    sortedSuburbs.forEach((suburbObject) => {
      sortedSuburbsObject[suburbObject.suburb] = suburbObject;
    });

    return sortedSuburbsObject;
  }
}
