const fakeDataList = [
  {
    suburb: "Milton",
    postcode: 4064,
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/102909774.jpg?k=51ce76490fcd81eade0aff827b885902c39b0a981e80a444a52388dba60b6f30&o=&hp=1",
    imageDescription: "Milton photo",
    suburbDescription: `Milton is a vibrant suburb located in Brisbane, Queensland, Australia. 
    Known for its rich history and cultural diversity, Milton offers a unique blend of urban living 
    and natural beauty. The suburb is home to a variety of cafes, restaurants, and boutique shops, 
    making it a popular destination for both locals and tourists.`,
    housePrice: 1681822,
    annualChange: 9.2,
    rentalPrice: 797,
    rentalYield: 4.8,
    rentalChange: -0.3,
    holdType: "Investor 61% vs Owner 39%",
    score: 86,
    wildfire: [
      { year: 2019, count: 2 },
      { year: 2020, count: 30 },
      { year: 2021, count: 15 },
      { year: 2022, count: 25 },
      { year: 2023, count: 11 },
    ],
    flood: [
      { type: "severe", count: 30 },
      { type: "moderate", count: 20 },
      { type: "minor", count: 5 },
    ],
    crime: [
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
  },
  {
    suburb: "New Farm",
    postcode: 4005,
    imageUrl:
      "https://executivetransfers.net.au/wp-content/uploads/2016/01/New-Farm-River-Walk.jpg",
    imageDescription: "New Farm photo",
    suburbDescription: `New Farm is a lively suburb located in Brisbane, Queensland, Australia. 
    Known for its beautiful parks and vibrant community, New Farm offers a mix of residential and 
    commercial areas. The suburb is home to the famous New Farm Park and a variety of cafes and 
    restaurants, making it a popular spot for locals and visitors alike.`,
    score: 80,
    housePrice: 2507974,
    annualChange: 7.6,
    rentalPrice: 1150,
    rentalYield: 4.91,
    rentalChange: 9.5,
    holdType: "Investor 57% vs Owner 43%",
  },
  {
    suburb: "Stretton",
    postcode: 4116,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/South_Bank_inna_Brisbane.jpg",
    imageDescription: "Stretton photo",
    suburbDescription: `Stretton is a peaceful suburb located in Brisbane, Queensland, Australia. 
    Known for its spacious homes and family-friendly environment, Stretton offers a mix of residential 
    and recreational areas. The suburb is home to several parks, schools, and local shops, making it 
    an ideal place for families.`,
    score: 78,
    housePrice: 1266284,
    annualChange: 7.9,
    rentalPrice: 850,
    rentalYield: 4.75,
    rentalChange: 6.3,
    holdType: "Investor 42% vs Owner 58%",
  },
  {
    suburb: "West End",
    postcode: 4101,
    imageUrl:
      "https://rimh2.domainstatic.com.au/G3eZzTE3w8VZkJsfRoKn53eRHHU=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018675822_1_1_230731_064420-w1200-h700",
    imageDescription: "West End photo",
    suburbDescription: `West End is a vibrant and eclectic suburb located in Brisbane, Queensland, Australia. 
    Known for its diverse community and bohemian atmosphere, West End offers a variety of cafes, restaurants, 
    and boutique shops. The suburb is also home to several markets and cultural events, making it a lively 
    and dynamic place to live.`,
    score: 84,
    housePrice: 1616667,
    annualChange: 8.6,
    rentalPrice: 780,
    rentalYield: 4.8,
    rentalChange: -0.6,
    holdType: "Investor 57% vs Owner 43%",
  },
  {
    suburb: "Fortitude Valley",
    postcode: 4006,
    imageUrl:
      "https://preview.redd.it/vgp9i2xbzp251.jpg?width=640&crop=smart&auto=webp&s=9659a548c1d17c23e8546018ae4c25e77feb9494",
    imageDescription: "Fortitude Valley photo",
    suburbDescription: `Fortitude Valley is a dynamic suburb located in Brisbane, Queensland, Australia. 
    Known for its nightlife and entertainment options, Fortitude Valley offers a variety of bars, clubs, 
    and live music venues. The suburb is also home to a range of restaurants and shops, making it a popular 
    destination for both locals and tourists.`,
    score: 68,
    housePrice: 1535044,
    annualChange: 6.4,
    rentalPrice: 550,
    rentalYield: 4.04,
    rentalChange: -17.9,
    holdType: "Investor 75% vs Owner 25%",
  },
  {
    suburb: "Fig Tree Pocket",
    postcode: 4069,
    imageUrl:
      "https://rimh2.domainstatic.com.au/X1eG-o6-S02qvmXXlGyF5ZiPD4I=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018392751_2_1_230302_074133-w2000-h1335",
    imageDescription: "Fig Tree Pocket photo",
    suburbDescription: `Fig Tree Pocket is a tranquil suburb located in Brisbane, Queensland, Australia. 
    Known for its spacious properties and lush greenery, Fig Tree Pocket offers a peaceful residential environment. 
    The suburb is home to several parks, schools, and the Lone Pine Koala Sanctuary, making it an ideal place for families.`,
    score: 75,
    housePrice: 1626706,
    annualChange: 7.3,
    rentalPrice: 865,
    rentalYield: 4.77,
    rentalChange: -2.8,
    holdType: "Investor 13% vs Owner 87%",
  },
  {
    suburb: "Nundah",
    postcode: 4012,
    imageUrl:
      "https://www.adrianschrinner.com.au/wp-content/uploads/2023/11/KPGB-Artist-impression-aerial-scaled.jpg",
    imageDescription: "Nundah photo",
    suburbDescription: `Nundah is a vibrant suburb located in Brisbane, Queensland, Australia. 
    Known for its community atmosphere and convenient amenities, Nundah offers a mix of residential 
    and commercial areas. The suburb is home to several parks, schools, and shopping centers, making it 
    an ideal place for families and professionals.`,
    score: 81,
    housePrice: 1116938,
    annualChange: 9.2,
    rentalPrice: 680,
    rentalYield: 4.89,
    rentalChange: 4.6,
    holdType: "Investor 57% vs Owner 43%",
  },
  {
    suburb: "Keperra",
    postcode: 4054,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Keperra_arana_leagues_2.jpg",
    imageDescription: "Keperra photo",
    suburbDescription: `Keperra is a quiet suburb located in Brisbane, Queensland, Australia. 
      Known for its affordable housing and family-friendly environment, Keperra offers a mix of residential 
      and recreational areas. The suburb is home to several parks, schools, and shopping centers, making it 
      an ideal place for families.`,
    score: 78,
    housePrice: 801335,
    annualChange: 8.3,
    rentalPrice: 622,
    rentalYield: 5.12,
    rentalChange: 11.2,
    holdType: "Investor 30% vs Owner 70%",
  },
  {
    suburb: "Newstead",
    postcode: 4006,
    imageUrl:
      "https://propertymash.com/wp-content/uploads/Gasworks-Residences-Artists-Impression-of-Building.jpg",
    imageDescription: "Newstead photo",
    suburbDescription: `Newstead is a trendy suburb located in Brisbane, Queensland, Australia. 
    Known for its modern apartments and vibrant community, Newstead offers a mix of residential and 
    commercial areas. The suburb is home to a variety of cafes, restaurants, and shops, making it a 
    popular spot for locals and visitors alike.`,
    score: 72,
    housePrice: 950821,
    annualChange: 9.1,
    rentalPrice: 625,
    rentalYield: 4.75,
    rentalChange: 6.4,
    holdType: "Investor 59% vs Owner 41%",
  },
  {
    suburb: "Sunnybank",
    postcode: 4109,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Mains_Rd_43_N_Sunnybank_sign.jpg",
    imageDescription: "Sunnybank photo",
    suburbDescription: `Sunnybank is a vibrant suburb located in Brisbane, Queensland, Australia. 
    Known for its cultural diversity and bustling shopping centers, Sunnybank offers a mix of residential 
    and commercial areas. The suburb is home to a variety of Asian restaurants, markets, and shops, 
    making it a popular destination for food lovers and shoppers. Sunnybank is also known for its 
    excellent public transport links and proximity to major highways, providing easy access to the Brisbane CBD 
    and surrounding areas.`,
    score: 84,
    housePrice: 966130,
    annualChange: 12.7,
    rentalPrice: 600,
    rentalYield: 5.03,
    rentalChange: 3.4,
    holdType: "Investor 26% vs Owner 74%",
  },
  {
    suburb: "Woolloongabba",
    postcode: 4102,
    imageUrl:
      "https://belmonde.com.au/wp-content/uploads/2021/03/gabba--scaled.jpg",
    imageDescription: "Woolloongabba photo",
    suburbDescription: `Woolloongabba is a vibrant suburb located in Brisbane, Queensland, Australia. 
    Known for its sports and entertainment options, Woolloongabba offers a mix of residential and 
    commercial areas. The suburb is home to the famous Gabba stadium and a variety of cafes, restaurants, 
    and shops.`,
    score: 83,
    housePrice: 1244623,
    annualChange: 10.0,
    rentalPrice: 720,
    rentalYield: 5.24,
    rentalChange: 10.8,
    holdType: "Investor 63% vs Owner 37%",
  },
  {
    suburb: "Saint Lucia",
    postcode: 4067,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ac45f9796d455f6ce2dd952/1583792746869-8HJ7PRLH8ATHS0W74TCG/RixRyan-4617.jpg/",
    imageDescription: "St Lucia photo",
    suburbDescription: `St Lucia is a leafy suburb located in Brisbane, Queensland, Australia. 
    Known for its prestigious university and beautiful parks, St Lucia offers a mix of residential 
    and educational areas. The suburb is home to the University of Queensland and a variety of cafes, 
    restaurants, and shops.`,
    score: 90,
    housePrice: 1801986,
    annualChange: 9.9,
    rentalPrice: 790,
    rentalYield: 4.77,
    rentalChange: 0.0,
    holdType: "Investor 56% vs Owner 44%",
  },
  {
    "suburb": "Toowong",
    "postcode": 4066,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Warrawee.jpg",
    "imageDescription": "Toowong photo",
    "suburbDescription": "Toowong ( t\u0259-WONG) is a riverside suburb in the City of Brisbane, Queensland, Australia. In the 2021 census, Toowong had a population of 12,556 people with a median weekly household income of $1,927.",
    "housePrice": "",
    "annualChange": 0,
    "rentalPrice": "",
    "rentalYield": 0,
    "rentalChange": 0,
    "holdType": "",
    "score": 0,
    "wildfire": [
      {
        "year": "2020",
        "count": 9
      },
      {
        "year": "2024",
        "count": 0
      },
      {
        "year": "2021",
        "count": 3
      },
      {
        "year": "2022",
        "count": 9
      },
      {
        "year": "2023",
        "count": 16
      }
    ],
    "flood": [
      {
        "type": "severe",
        "count": 29
      },
      {
        "type": "moderate",
        "count": 16
      },
      {
        "type": "minor",
        "count": 15
      }
    ],
    "crime": [
      {
        "type": "Fraud",
        "count": 138
      },
      {
        "type": "Handling Stolen Goods",
        "count": 25
      },
      {
        "type": "Good Order Offences",
        "count": 89
      },
      {
        "type": "Drug Offences",
        "count": 175
      },
      {
        "type": "Weapons Act Offences",
        "count": 25
      },
      {
        "type": "Traffic and Related Offences",
        "count": 117
      },
      {
        "type": "Other Theft (excl. Unlawful Entry)",
        "count": 1130
      },
      {
        "type": "Other Property Damage",
        "count": 154
      },
      {
        "type": "Unlawful Entry",
        "count": 292
      },
      {
        "type": "Assault",
        "count": 92
      },
      {
        "type": "Other Offences Against the Person",
        "count": 33
      },
      {
        "type": "Trespassing and Vagrancy",
        "count": 23
      },
      {
        "type": "Liquor (excl. Drunkenness)",
        "count": 6
      },
      {
        "type": "Robbery",
        "count": 16
      },
      {
        "type": "Unlawful Use of Motor Vehicle",
        "count": 79
      },
      {
        "type": "Miscellaneous Offences",
        "count": 9
      },
      {
        "type": "Arson",
        "count": 1
      }
    ]
  },
  {
    suburb: "Gordon Park",
    postcode: 4031,
    imageUrl: "https://live.staticflickr.com/3869/15148053067_d62f68cb91_c.jpg",
    imageDescription: "Gordon Park photo",
    suburbDescription: `Gordon Park is a peaceful suburb located in Brisbane, Queensland, Australia. 
    Known for its green spaces and friendly community, Gordon Park offers a mix of residential and 
    recreational areas. The suburb is home to the beautiful Kedron Brook, which provides a variety of 
    walking and cycling trails. With its close proximity to the Brisbane CBD and excellent public transport 
    links.`,
    score: 77,
    housePrice: 1296649,
    annualChange: 8.1,
    rentalPrice: 695,
    rentalYield: 4.92,
    rentalChange: 7.8,
    holdType: "Investor 42% vs Owner 57%",
  },
  {
    suburb: "Balmoral",
    postcode: 4171,
    imageUrl:
      "https://images.allhomes.com.au/property/photo/bfac94044e0969b619371cce58dbc23a_hd.jpg",
    imageDescription: "Balmoral photo",
    suburbDescription: `Balmoral is a charming suburb located in Brisbane, Queensland, Australia. 
    Known for its leafy streets and family-friendly atmosphere, Balmoral offers a mix of residential 
    and recreational areas. The suburb is home to several parks, schools, and local shops, making it 
    an ideal place for families. `,
    score: 73,
    housePrice: 1558360,
    annualChange: 6.4,
    rentalPrice: 900,
    rentalYield: 5.04,
    rentalChange: 12.9,
    holdType: "Investor 37% vs Owner 63%",
  },
  {
    suburb: "Bowen Hills",
    postcode: 4006,
    imageUrl:
      "https://newurbanvillages.com.au/wp-content/uploads/2018/12/Campbell-St-Bowen-Hills_20_cam03-closeup-min-scaled.jpg",
    imageDescription: "Bowen Hills photo",
    suburbDescription: `Bowen Hills is a dynamic suburb located in Brisbane, Queensland, Australia. 
    Known for its modern apartments and vibrant community, Bowen Hills offers a mix of residential and 
    commercial areas. The suburb is home to a variety of cafes, restaurants, and shops, making it a 
    popular spot for locals and visitors alike.`,
    score: 81,
    housePrice: 1296175,
    annualChange: 7.3,
    rentalPrice: 720,
    rentalYield: 4.8,
    rentalChange: 6.7,
    holdType: "Investor 66% vs Owner 34%",
  },
  {
    suburb: "Bridgeman Downs",
    postcode: 4035,
    imageUrl:
      "https://www.coxarchitecture.com.au/wp-content/uploads/2019/08/409051_00_N62_highresjpg-1980x1332.jpg",
    imageDescription: "Bridgeman Downs photo",
    suburbDescription: `Bridgeman Downs is a peaceful suburb in Brisbane, known for its spacious homes and parks. 
    It offers a family-friendly environment with easy access to amenities and schools.`,
    score: 76,
    housePrice: 880669,
    annualChange: 6.6,
    rentalPrice: 850,
    rentalYield: 4.83,
    rentalChange: 6.3,
    holdType: "Investor 23% vs Owner 77%",
  },
  {
    suburb: "Clayfield",
    postcode: 4011,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqmlZQHBqVOxSqgwmhz5SAWcipRl3WFAXNg&s",
    imageDescription: "Clayfield photo",
    suburbDescription: `Clayfield is a well-established suburb in Brisbane, Queensland, Australia. 
    Known for its heritage homes and leafy streets, Clayfield offers a mix of residential and commercial areas. 
    The suburb is home to several parks, schools, and local shops, making it an ideal place for families.`,
    score: 82,
    housePrice: 1698792,

    annualChange: 9.8,
    rentalPrice: 825,
    rentalYield: 4.67,
    rentalChange: 3.4,
    holdType: "Investor 45% vs Owner 55%",
  },
  {
    suburb: "Mount Gravatt East",
    postcode: 4122,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSy4fFdVn7edKQWQfyvqObtVGrNGZrWlnpA&s",
    imageDescription: "Mount Gravatt East photo",
    suburbDescription: `Mount Gravatt East is a leafy suburb located in Brisbane, Queensland, Australia. 
    Known for its family-friendly environment and excellent schools, Mount Gravatt East offers a mix of 
    residential and recreational areas. The suburb is home to several parks, shopping centers, and cafes, 
    making it an ideal place for families.`,
    score: 87,
    housePrice: 983234,
    annualChange: 14.8,
    rentalPrice: 650,
    rentalYield: 4.81,
    rentalChange: 8.3,
    holdType: "Investor 37% vs Owner 63%",
  },
  {
    suburb: "Northgate",
    postcode: 4013,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhYSow4qLILfFiHJmp9_PSCvqOS4HrCz7yA&s",
    imageDescription: "Northgate photo",
    suburbDescription: `Northgate is a well-connected suburb located in Brisbane, Queensland, Australia. 
    Known for its convenient transport links and community amenities, Northgate offers a mix of residential 
    and commercial areas. The suburb is home to several parks, schools, and local shops, making it an ideal 
    place for families and professionals.`,
    score: 69,
    housePrice: 1170794,
    annualChange: 8.4,
    rentalPrice: 650,
    rentalYield: 4.9,
    rentalChange: 4.0,
    holdType: "Investor 44% vs Owner 56%",
  },
  {
    suburb: "Wavell Heights",
    postcode: 4012,
    imageUrl:
      "https://content.api.news/v3/images/bin/f38e22e952e1c76dbc9419e0a64e4de3",
    imageDescription: "Wavell Heights photo",
    suburbDescription: `Wavell Heights is a quiet suburb located in Brisbane, Queensland, Australia. 
    Known for its family-friendly environment and green spaces, Wavell Heights offers a mix of residential 
    and recreational areas. The suburb is home to several parks, schools, and local shops, making it 
    an ideal place for families.`,
    score: 71,
    housePrice: 1178650,
    annualChange: 8.7,
    rentalPrice: 690,
    rentalYield: 4.71,
    rentalChange: 2.2,
    holdType: "Investor 27% vs Owner 73%",
  },
];

export default fakeDataList;
