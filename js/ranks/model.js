import fakeDataList from "../../data/fakeSuburbData.js";

export const state = {
  suburbs: {},
};

export const LoadSuburb = async function (keyword) {
  try {
    // alert('LoadSuburb' + keyword);
    // alert('LoadSuburb called')
    let AllSuburbs = fakeDataList;
    state.suburbs = {};
    AllSuburbs.forEach((suburbObject) => {
      if (keyword === null) {
        state.suburbs[suburbObject.suburb] = suburbObject;
      } else if (suburbObject.suburb.toLowerCase().includes(keyword.toLowerCase())) {
        state.suburbs[suburbObject.suburb] = suburbObject;
      }
    });

  } catch (err) {
    console.error(`${err} 🥲`);
    throw err;
  }
};

////////////////////////////////////////////////////
LoadSuburb(null);
