import fakeDataList from "../../data/fakeDataMill.js";

export const state = {
  suburbs: {},
};

export const LoadSuburb = async function () {
  try {
    const events = fakeDataList;
    events.forEach((suburbObject) => {
      state.suburbs[suburbObject.suburb] = suburbObject;
    });
  } catch (err) {
    console.error(`${err} 🥲`);
    throw err;
  }
};

////////////////////////////////////////////////////
LoadSuburb();
