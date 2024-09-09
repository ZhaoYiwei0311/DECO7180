async function fetchGeographiesData(apiUrl) {
  return await $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
    cache: true,
  });
}

async function fetchOffencesData(
  apiUrl,
  locationType,
  locationName,
  startDate,
  endDate
) {
  const fullUrl = `${apiUrl}?locationType=${locationType}&locationName=${encodeURIComponent(
    locationName
  )}&startDate=${startDate}&endDate=${endDate}&format=JSON`;
  try {
    const data = await $.ajax({
      url: fullUrl,
      method: "GET",
      dataType: "json",
    });

    if (data.length > 0) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function fetchCrimeData() {
  const geographiesUrl =
    "https://a5c7zwf7e5.execute-api.ap-southeast-2.amazonaws.com/dev/lut";
  const offencesUrl =
    "https://a5c7zwf7e5.execute-api.ap-southeast-2.amazonaws.com/dev/offences";
  const startDate = "01-25-2024";
  const endDate = "07-26-2024";

  const data = await fetchGeographiesData(geographiesUrl);
  const postcodeData = data.filter((item) => item.type === "POSTCODE");

  const boundaryPromises = postcodeData.map((item) =>
    fetchOffencesData(offencesUrl, item.type, item.name, startDate, endDate)
  );

  const results = await Promise.all(boundaryPromises);

  return results;
}
