let wildfireData;
let floodData;

function fetchData(datasetId, totalRecords, additionalQuery) {
  return new Promise(function (resolve, reject) {
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
            resolve(allData); // 在这里调用 resolve 来解析 Promise
          }
        },
        error: function (xhr, status, error) {
          console.error("Fail", status, error);
          reject(new Error(error)); // 在这里调用 reject 来拒绝 Promise
        },
      });
    }

    fetch();
  });
}

function fetchDataAndExport() {
  const datasetId1 = "wild-fire-history";
  const totalRecords1 = 556;
  const additionalQuery1 = "";

  const datasetId2 = "flood-awareness-creek";
  const totalRecords2 = 503; // 503 records for high risk
  const additionalQuery2 = "?select=*&where=flood_risk%3D%22High%22";

  let wildfirePromise = fetchData(datasetId1, totalRecords1, additionalQuery1);
  let floodPromise = fetchData(datasetId2, totalRecords2, additionalQuery2);

  return Promise.all([wildfirePromise, floodPromise])
    .then((data) => {
      [wildfireData, floodData] = data;

      return {
        wildfireData,
        floodData,
      };
    })
    .catch((error) => {
      console.error("Data loading failed:", error);
    });
}

export { fetchDataAndExport };
