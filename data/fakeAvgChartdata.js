// This data object represents the average suburb data.
// The 'avgWildfire', 'avgFlood' and 'avgCrime' data are processed from datasets provided by the QLD government and are inserted via the backend.

const avgChartData = {
  avgWildfire: [
    { year: 2019, count: 12 },
    { year: 2020, count: 17 },
    { year: 2021, count: 30 },
    { year: 2022, count: 25 },
    { year: 2013, count: 19 },
  ],
  avgFlood: [
    { type: "severe", count: 120 },
    { type: "moderate", count: 60 },
    { type: "minor", count: 15 },
  ],
  avgCrime: [
    { type: "Other Theft (excl. Unlawful Entry)", count: 159 },
    { type: "Unlawful Entry", count: 101 },
    { type: "Unlawful Use of Motor Vehicle", count: 32 },
    { type: "Traffic and Related Offences", count: 58 },
    { type: "Drug Offences", count: 64 },
    { type: "Good Order Offences", count: 39 },
    { type: "Assault", count: 20 },
    { type: "Other Property Damage", count: 27 },
    { type: "Fraud", count: 19 },
    { type: "Liquor (excl. Drunkenness)", count: 17 },
    { type: "others", count: 23 },
  ],
};

export default avgChartData;
