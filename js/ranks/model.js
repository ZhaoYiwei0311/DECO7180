import fakeDataList from "../../data/fakeSuburbData.js";

export const state = {
  suburbs: {},
};

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
