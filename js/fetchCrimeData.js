$(document).ready(function () {
  function fetchGeographiesData(apiUrl, callback) {
    return $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
      cache: true,
    });
  }

  function fetchOffencesData(
    apiUrl,
    locationType,
    locationName,
    startDate,
    endDate
  ) {
    const fullUrl = `${apiUrl}?locationType=${locationType}&locationName=${encodeURIComponent(
      locationName
    )}&startDate=${startDate}&endDate=${endDate}&format=JSON`;
    // alert(fullUrl);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: fullUrl,
        method: "GET",
        dataType: "json",
        success: function (data) {
          if (data.length > 0) {
            resolve(data);
          } else {
            // if there is no data for the given parameters, resolve the promise with null
            resolve(null);
          }
        },
        error: function () {
          resolve(null); // upon error in fetching the data, resolve the promise with null
        },
      });
    });
  }

  function fetchAllData() {
    const geographiesUrl =
      "https://a5c7zwf7e5.execute-api.ap-southeast-2.amazonaws.com/dev/lut";
    const offencesUrl =
      "https://a5c7zwf7e5.execute-api.ap-southeast-2.amazonaws.com/dev/offences";
    const startDate = "08-25-2024";
    const endDate = "08-26-2024";

    fetchGeographiesData(geographiesUrl).done(function (data) {
      // Filter out only the items where type is "POSTCODE"
      const postcodeData = data.filter(item => item.type === "POSTCODE");

      const boundaryPromises = postcodeData.map((item) =>
        fetchOffencesData(offencesUrl, item.type, item.name, startDate, endDate)
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
