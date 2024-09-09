$(document).ready(function () {
  function fetchData(datasetId, totalRecords, additionalQuery, callback) {
    var limit = 100;
    var offset = 0;
    var allData = [];

    function fetch() {
      var data = {
        limit: limit,
        offset: offset,
      };

      $.ajax({
        url: `https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/${datasetId}/records${additionalQuery}`,
        data: data,
        method: "GET",
        dataType: "json",
        cache: true,
        success: function (response) {
          var results = response.results;
          allData = allData.concat(results);
          offset += limit;
          if (offset < totalRecords) {
            fetch();
          } else {
            callback(allData);
          }
        },
        error: function (xhr, status, error) {
          console.error("Fail", status, error);
        },
      });
    }

    fetch();
  }

  // first dataset
  const datasetId1 = "wild-fire-history";
  const totalRecords1 = 556;
  const additionalQuery1 = "";
  fetchData(datasetId1, totalRecords1, additionalQuery1, function (data) {
    console.log("Data for dataset wild fire:", data);
  });

  // second dataset
  const datasetId2 = "flood-awareness-creek";
  const totalRecords2 = 503; // 503 records for high risk
  const additionalQuery2 = "?select=*&where=flood_risk%3D%22High%22";
  fetchData(datasetId2, totalRecords2, additionalQuery2, function (data) {
    console.log("Data for dataset flood area:", data);
  });
});
