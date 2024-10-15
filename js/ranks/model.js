import fakeDataList from "../../data/fakeSuburbData.js";

// Load suburb data from fake data for global state
export const state = {
  suburbs: {},
};

// Load suburb data from fake data
export const LoadSuburb = async function () {
  try {
    const AllSuburbs = fakeDataList;
    AllSuburbs.forEach((suburbObject) => {
      state.suburbs[suburbObject.suburb] = suburbObject;
    });
  } catch (err) {
    console.error(`${err} 🥲`);
    throw err;
  }
};

////////////////////////////////////////////////////
LoadSuburb();
