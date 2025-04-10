$(document).ready(function () {
  function fetchGeographiesData(apiUrl, callback) {
    return $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
      cache: true,
    });
  }

  // Fetch boundary geographies
  function fetchBoundaryGeographies(apiUrl, locationType, locationName) {
    const fullUrl = `${apiUrl}?locationType=${locationType}&locationName=${encodeURIComponent(
      locationName
    )}`;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: fullUrl,
        method: "GET",
        dataType: "json",
        cache: true,
        success: function (data) {
          resolve(data);
        },
        error: function (xhr, status, error) {
          // Don't print any error message
          resolve(null); // Resolve with null if there was an error
        },
      });
    });
  }

  // Fetch all data
  function fetchAllData() {
    const geographiesUrl =
      "https://a5c7zwf7e5.execute-api.ap-southeast-2.amazonaws.com/dev/lut";

    fetchGeographiesData(geographiesUrl).done(function (data) {
      const boundaryPromises = data
        // .filter((item) => item.type == "Suburb" && item.name == 'Toowong') // Only include suburb and toowong for test as performance issues will occur
        .filter((item) => item.type == "Suburb") // Only include suburb
        .map((item) =>
          fetchBoundaryGeographies(
            "https://a5c7zwf7e5.execute-api.ap-southeast-2.amazonaws.com/dev/locations",
            item.type,
            item.name
          )
        );

      // Wait for all promises to complete
      Promise.all(boundaryPromises).then(function (results) {
        console.log(results.filter((result) => result !== null)); // Ignore null results
      });
    });
  }

  // Start fetching all data
  fetchAllData();
});
