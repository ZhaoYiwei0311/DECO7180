// Function to filter the wildfire data
export function filterFireData(data) {
  const filteredData = data.map((item) => {
    return {
      geoPoint: item.geo_point_2d,
      range: item.shape_area,
      year: item.dateunknow,
    };
  });
  return filteredData;
}

// Function to filter the flood data
export function filterFloodData(data) {
  const filteredData = data.map((item) => {
    return {
      geoPoint: item.geo_point_2d,
      range: item.shape_area,
    };
  });
  return filteredData;
}

// Function to filter crime data
export function filterCrimeData(results) {
  let acc = results.reduce((accum, item) => {
    const key = item.Postcode;
    if (!accum[key]) {
      accum[key] = [];
    }

    let typeObj = accum[key].find((obj) => obj.type === item.Type);

    if (typeObj) {
      typeObj.count++;
    } else {
      typeObj = {
        type: item.Type,
        count: 1,
      };
      accum[key].push(typeObj);
    }

    return accum;
  }, {});

  for (let postcode in acc) {
    let othersCount = 0;

    acc[postcode] = acc[postcode].filter((obj) => {
      if (obj.count < 10) {
        othersCount += obj.count;
        return false;
      }
      return true;
    });

    if (othersCount > 0) {
      acc[postcode].push({
        type: "others",
        count: othersCount,
      });
    }
  }

  return acc;
}
