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
    boundaries: [
      {
        lat: -27.4710107,
        lng: 153.0057156,
      },
      {
        lat: -27.4710107,
        lng: 153.0057156,
      },
    ],
    housePrice: 1000000,
    score: 86,
    wildfire: [
      {
        geoPoint: { lon: 153.14884793967494, lat: -27.463826539419905 },
        range: 60762.6408286,
        year: "2015",
      },
      {
        geoPoint: { lon: 153.07090672456115, lat: -27.63235080802502 },
        range: 202.475587979,
        year: "2016",
      },
      {
        geoPoint: { lon: 153.0415260252303, lat: -27.649146253326066 },
        range: 1826.4291696,
        year: "2016",
      },
    ],
    flood: [
      {
        geoPoint: { lon: 152.97591393733154, lat: -27.41070483471505 },
        range: 43939.998046875,
      },
      {
        geoPoint: { lon: 153.1069923733349, lat: -27.400945845917924 },
        range: 74041,
      },
      {
        geoPoint: { lon: 153.11806259041205, lat: -27.355645899857244 },
        range: 16047,
      },
      {
        geoPoint: { lon: 152.92767347437126, lat: -27.60772263427417 },
        range: 59222,
      },
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
    imageUrl: "https://executivetransfers.net.au/wp-content/uploads/2016/01/New-Farm-River-Walk.jpg",
    imageDescription: "New Farm photo",
    suburbDescription: `New Farm is a lively suburb located in Brisbane, Queensland, Australia. 
    Known for its beautiful parks and vibrant community, New Farm offers a mix of residential and 
    commercial areas. The suburb is home to the famous New Farm Park and a variety of cafes and 
    restaurants, making it a popular spot for locals and visitors alike.`
  },
  {
    suburb: "South Brisbane",
    postcode: 4101,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2b/South_Bank_inna_Brisbane.jpg",
    imageDescription: "South Brisbane photo",
    suburbDescription: `South Brisbane is a bustling suburb located just across the river from the Brisbane CBD. 
    It is known for its cultural attractions, including the Queensland Performing Arts Centre and the 
    South Bank Parklands. The suburb offers a mix of modern apartments and historic buildings, providing 
    a dynamic urban lifestyle.`
  },
  {
    suburb: "West End",
    postcode: 4101,
    imageUrl: "https://rimh2.domainstatic.com.au/G3eZzTE3w8VZkJsfRoKn53eRHHU=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018675822_1_1_230731_064420-w1200-h700",
    imageDescription: "West End photo",
    suburbDescription: `West End is a vibrant and eclectic suburb located in Brisbane, Queensland, Australia. 
    Known for its diverse community and bohemian atmosphere, West End offers a variety of cafes, restaurants, 
    and boutique shops. The suburb is also home to several markets and cultural events, making it a lively 
    and dynamic place to live.`
  },
  {
    suburb: "Fortitude Valley",
    postcode: 4006,
    imageUrl: "https://preview.redd.it/vgp9i2xbzp251.jpg?width=640&crop=smart&auto=webp&s=9659a548c1d17c23e8546018ae4c25e77feb9494",
    imageDescription: "Fortitude Valley photo",
    suburbDescription: `Fortitude Valley is a dynamic suburb located in Brisbane, Queensland, Australia. 
    Known for its nightlife and entertainment options, Fortitude Valley offers a variety of bars, clubs, 
    and live music venues. The suburb is also home to a range of restaurants and shops, making it a popular 
    destination for both locals and tourists.`
  },
  {
    suburb: "Paddington",
    postcode: 4064,
    imageUrl: "https://rimh2.domainstatic.com.au/X1eG-o6-S02qvmXXlGyF5ZiPD4I=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018392751_2_1_230302_074133-w2000-h1335",
    imageDescription: "Paddington photo",
    suburbDescription: `Paddington is a charming suburb located in Brisbane, Queensland, Australia. 
    Known for its historic homes and leafy streets, Paddington offers a mix of residential and commercial areas. 
    The suburb is home to a variety of cafes, restaurants, and boutique shops, making it a popular spot for 
    locals and visitors alike.`
  },
  {
    suburb: "Kangaroo Point",
    postcode: 4169,
    imageUrl: "https://www.adrianschrinner.com.au/wp-content/uploads/2023/11/KPGB-Artist-impression-aerial-scaled.jpg",
    imageDescription: "Kangaroo Point photo",
    suburbDescription: `Kangaroo Point is a picturesque suburb located in Brisbane, Queensland, Australia. 
    Known for its stunning views of the Brisbane River and the city skyline, Kangaroo Point offers a mix of 
    residential and recreational areas. The suburb is home to the famous Kangaroo Point Cliffs and a variety 
    of parks and walking trails.`
  },
  {
    suburb: "Spring Hill",
    postcode: 4000,
    imageUrl: "https://spaceproperty.com.au/wp-content/uploads/2022/08/brisbane-City-scaled.jpg",
    imageDescription: "Spring Hill photo",
    suburbDescription: `Spring Hill is a historic suburb located in Brisbane, Queensland, Australia. 
    Known for its heritage buildings and close proximity to the Brisbane CBD, Spring Hill offers a mix of 
    residential and commercial areas. The suburb is home to a variety of cafes, restaurants, and shops, 
    making it a popular spot for locals and visitors alike.`
  },
  {
    suburb: "Newstead",
    postcode: 4006,
    imageUrl: "https://propertymash.com/wp-content/uploads/Gasworks-Residences-Artists-Impression-of-Building.jpg",
    imageDescription: "Newstead photo",
    suburbDescription: `Newstead is a trendy suburb located in Brisbane, Queensland, Australia. 
    Known for its modern apartments and vibrant community, Newstead offers a mix of residential and 
    commercial areas. The suburb is home to a variety of cafes, restaurants, and shops, making it a 
    popular spot for locals and visitors alike.`
  },
  {
    suburb: "Teneriffe",
    postcode: 4005,
    imageUrl: "https://propertymash.com/wp-content/uploads/The-James-Teneriffe.jpg",
    imageDescription: "Teneriffe photo",
    suburbDescription: `Teneriffe is a stylish suburb located in Brisbane, Queensland, Australia. 
    Known for its historic wool stores and riverside location, Teneriffe offers a mix of residential 
    and commercial areas. The suburb is home to a variety of cafes, restaurants, and boutique shops, 
    making it a popular spot for locals and visitors alike.`
  },
  {
    suburb: "Woolloongabba",
    postcode: 4102,
    imageUrl: "https://belmonde.com.au/wp-content/uploads/2021/03/gabba--scaled.jpg",
    imageDescription: "Woolloongabba photo",
    suburbDescription: `Woolloongabba is a vibrant suburb located in Brisbane, Queensland, Australia. 
    Known for its sports and entertainment options, Woolloongabba offers a mix of residential and 
    commercial areas. The suburb is home to the famous Gabba stadium and a variety of cafes, restaurants, 
    and shops.`
  },
  {
    suburb: "St Lucia",
    postcode: 4067,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5ac45f9796d455f6ce2dd952/1583792746869-8HJ7PRLH8ATHS0W74TCG/RixRyan-4617.jpg/",
    imageDescription: "St Lucia photo",
    suburbDescription: `St Lucia is a leafy suburb located in Brisbane, Queensland, Australia. 
    Known for its prestigious university and beautiful parks, St Lucia offers a mix of residential 
    and educational areas. The suburb is home to the University of Queensland and a variety of cafes, 
    restaurants, and shops.`
  },
  {
    suburb: "Toowong",
    postcode: 4066,
    imageUrl: "https://asquick.com.au/wp-content/uploads/2024/01/toowong-it-support-computer-help-brisbane-qld-australia-1024x576.jpg",
    imageDescription: "Toowong photo",
    suburbDescription: `Toowong is a bustling suburb located in Brisbane, Queensland, Australia. 
    Known for its shopping and dining options, Toowong offers a mix of residential and commercial areas. 
    The suburb is home to the Toowong Village shopping centre and a variety of cafes, restaurants, and shops.`
  },
  {
    suburb: "Auchenflower",
    postcode: 4066,
    imageUrl: "https://cdn.prod.website-files.com/668cd20c358ecf3bcc532c88/66a4d8d0864d67f057593859_20240727T1123-963b9824-973a-4bc3-8243-309aa1f2a790.webp",
    imageDescription: "Auchenflower photo",
    suburbDescription: `Auchenflower is a charming suburb located in Brisbane, Queensland, Australia. 
    Known for its leafy streets and historic homes, Auchenflower offers a mix of residential and 
    recreational areas. The suburb is home to a variety of parks and walking trails, making it a 
    popular spot for outdoor activities.`
  },
  {
    suburb: "Red Hill",
    postcode: 4059,
    imageUrl: "https://cdn.concreteplayground.com/content/uploads/2019/11/Red-Hill-Cinemas_supplied.jpg",
    imageDescription: "Red Hill photo",
    suburbDescription: `Red Hill is a historic suburb located in Brisbane, Queensland, Australia. 
    Known for its heritage buildings and close proximity to the Brisbane CBD, Red Hill offers a mix of 
    residential and commercial areas. The suburb is home to a variety of cafes, restaurants, and shops, 
    making it a popular spot for locals and visitors alike.`
  },
  {
    suburb: "Bowen Hills",
    postcode: 4006,
    imageUrl: "https://newurbanvillages.com.au/wp-content/uploads/2018/12/Campbell-St-Bowen-Hills_20_cam03-closeup-min-scaled.jpg",
    imageDescription: "Bowen Hills photo",
    suburbDescription: `Bowen Hills is a dynamic suburb located in Brisbane, Queensland, Australia. 
    Known for its modern apartments and vibrant community, Bowen Hills offers a mix of residential and 
    commercial areas. The suburb is home to a variety of cafes, restaurants, and shops, making it a 
    popular spot for locals and visitors alike.`
  },
  {
    suburb: "Herston",
    postcode: 4006,
    imageUrl: "https://www.coxarchitecture.com.au/wp-content/uploads/2019/08/409051_00_N62_highresjpg-1980x1332.jpg",
    imageDescription: "Herston photo",
    suburbDescription: `Herston is a leafy suburb located in Brisbane, Queensland, Australia. 
    Known for its medical facilities and beautiful parks, Herston offers a mix of residential and 
    educational areas. The suburb is home to the Royal Brisbane and Women's Hospital and a variety of 
    cafes, restaurants, and shops.`
  },
  {
    suburb: "Highgate Hill",
    postcode: 4101,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqmlZQHBqVOxSqgwmhz5SAWcipRl3WFAXNg&s",
    imageDescription: "Highgate Hill photo",
    suburbDescription: `Highgate Hill is a charming suburb located in Brisbane, Queensland, Australia. 
    Known for its leafy streets and historic homes, Highgate Hill offers a mix of residential and 
    recreational areas. The suburb is home to a variety of parks and walking trails, making it a 
    popular spot for outdoor activities.`
  },
  {
    suburb: "East Brisbane",
    postcode: 4169,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSy4fFdVn7edKQWQfyvqObtVGrNGZrWlnpA&s",
    imageDescription: "East Brisbane photo",
    suburbDescription: `East Brisbane is a vibrant suburb located in Brisbane, Queensland, Australia. 
    Known for its sports and entertainment options, East Brisbane offers a mix of residential and 
    commercial areas. The suburb is home to the famous Gabba stadium and a variety of cafes, restaurants, 
    and shops.`
  },
  {
    suburb: "Dutton Park",
    postcode: 4102,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhYSow4qLILfFiHJmp9_PSCvqOS4HrCz7yA&s",
    imageDescription: "Dutton Park photo",
    suburbDescription: `Dutton Park is a leafy suburb located in Brisbane, Queensland, Australia. 
    Known for its beautiful parks and close proximity to the Brisbane River, Dutton Park offers a mix of 
    residential and recreational areas. The suburb is home to a variety of parks and walking trails, 
    making it a popular spot for outdoor activities.`
  }
];

export default fakeDataList;
