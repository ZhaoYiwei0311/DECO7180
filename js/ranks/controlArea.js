export default class SuburbController {
  constructor(suburbs) {
    this.suburbs = Object.values(suburbs);
  }

  sortSuburbs(sortBy) {
    let sortedSuburbs;
    if (sortBy === "order") sortedSuburbs = [...this.suburbs].reverse();
    if (sortBy === "type" || sortBy === "name")
      sortedSuburbs = [...this.suburbs].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
      );
    if (sortBy === "price") {
      sortedSuburbs = [...this.suburbs].sort(() => Math.random() - 0.5);
      return sortedSuburbs;
    }
    if (sortBy === "dateTime")
      sortedSuburbs = [...this.suburbs].sort((a, b) => {
        const dateA = Date.parse(
          a[sortBy]
            .split(" ")
            .reverse()
            .join("-")
            .replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
        );
        const dateB = Date.parse(
          b[sortBy]
            .split(" ")
            .reverse()
            .join("-")
            .replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
        );
        return dateA - dateB;
      });
    return sortedSuburbs;
  }
}
