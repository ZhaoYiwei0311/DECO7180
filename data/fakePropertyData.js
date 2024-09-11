const fakeDataList = [
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/d346534266730ee2e8238d4bfaa3b7f8395c30934290c1aeb1f135c4cf86975e/image.jpg",
    price:
      "Price: $3,300,000 - $3,600,000",
    username: "Milton",
    imageDescription:
      "Milton House",
    propertyInfo: "🛌 4 🛁 3 🚗 2 309㎡ ",
  },
  {
    imgSrc:
      "https://www.bankrate.com/2023/03/09124248/how-to-invest-in-real-estate-in-2024.jpeg?auto=webp&optimize=high&crop=16:9&width=912%20912w",
    price:
      "Price: $1,600,000",
    username: "Sunnybank",
    imageDescription:
      "Sunnybank House",
    propertyInfo: "🛌 3 🛁 1 🚗 1 700㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/1000x750/c4397b7c313a66c5cd4371c9c3acb61afc7045a5553d8806ea23c89d475ed7d1/image.jpg",
    price:
      "Price by Negotiation",
    username: "Saint Lucia",
    imageDescription:
      "Saint Lucia Apartment",
    propertyInfo: "🛌 3 🛁 1 🚗 1 140㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/1000x750/6ad924b26a01839dabb584e94de62c30f26307671af2fb63f7149e7aae80e682/image.jpg",
    price:
      "Offers over $1,425,000",
    username: "Bridgeman Downs",
    imageDescription:
      "Bridgeman Downs House",
    propertyInfo: "🛌 5 🛁 3 🚗 2 450㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/576e2217087c47e05dad101a20b1bcd2d68faa598979b99c8a2e6b45e3557e7f/image.jpg",
    price:
      "Auction",
    username: "Wavell Heights",
    imageDescription:
      "Wavell Heights House",
    propertyInfo: "🛌 5 🛁 3 🚗 2 921㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/4b80a109cf958464351614fdf89f33b664764e8bf072edf4537697f0698d3ce0/image.jpg",
    price:
      "Offers Above $2,995,000",
    username: "Clayfield",
    imageDescription:
      "Clayfield House",
    propertyInfo: "🛌 4 🛁 3 🚗 2 607㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/08d4a70683361dabf68ff3741bfafa0619ec89054964022c14d538e8d9908bb7/image.jpg",
    price:
      "Offers Over $2,300,000",
    username: "Balmoral",
    imageDescription:
      "Balmoral House",
    propertyInfo: "🛌 4 🛁 3 🚗 2 503㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/859c82e74e136df3d218873432c4f1905666d5d3d333a66028178ff57f380bc0/image.jpg",
    price:
      "Price: $525,000",
    username: "Fortitude Valley",
    imageDescription:
      "Fortitude Valley Apartment ",
    propertyInfo: "🛌 2 🛁 1 🚗 1 90㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/30b43c741c85982e5d08d1c17717c5ba65c56566e8fd86b26e8870265c36dd75/image.jpg",
    price:
      "Price: $1,270,000",
    username: "Woolloongabba",
    imageDescription:
      "Woolloongabba House",
    propertyInfo: "🛌3 🛁 2 🚗 2 750㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/77971ae57dd0049bb7ae9ea932de88074bf3c4f4b2f7bcbfa87c4d2e09ba5812/image.jpg",
    price:
      "Price: $975,000 - $1,050,000",
    username: "Keperra",
    imageDescription:
      "Keperra House",
    propertyInfo: "🛌 3 🛁 1 🚗 2 750㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/07326454088f02407d22bc3f8f16ef4538cb60f2196e330195d255d07e4ac7e6/image.jpg",
    price:
      "Price: $1,400,000",
    username: "Gordon Park",
    imageDescription:
      "Gordon Park House",
    propertyInfo: "🛌 4 🛁 2 🚗 1 435㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/6ad924b26a01839dabb584e94de62c30f26307671af2fb63f7149e7aae80e682/image.jpg",
    price:
      "Offers over $1,425,000",
    username: "Bridgeman Downs",
    imageDescription:
      "Bridgeman Downs House",
    propertyInfo: "🛌 5 🛁 3 🚗 2 450㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/bd28ad94dfd3b8ae6da544b88c868943da442d9812a8ff3651a3640c45d74a04/image.jpg",
    price:
      "Price: $1,620,000",
    username: "Stretton",
    imageDescription:
      "Stretton House ",
    propertyInfo: "🛌 5 🛁 3 🚗 4 676㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/674c448e88756fa8ab717677f48dbd3240d8bfaaf8f0ae8031856b92ab5ec7ba/image.jpg",
    price:
      "Price: $3,800,000",
    username: "New Farm",
    imageDescription:
      "New Farm House",
    propertyInfo: "🛌 5 🛁 2 🚗 1 405㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/538322d460502fea2fcbecfd853a341a34ca4f5adc6c6d93aae3db0530530fb2/image.jpg",
    price:
      "Price: $780,000",
    username: "West End",
    imageDescription:
      "West End Apartment",
    propertyInfo: "🛌 2 🛁 2 🚗 1 87㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/f80465cb4bebaaabdbd7e4b2d6c61ff8173701f48783057e26a386c9ca75691a/image.jpg",
    price:
      "Price: $759,000",
    username: "Northgate",
    imageDescription:
      "Northgate House",
    propertyInfo: "🛌 3 🛁 1 🚗 2 599㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/55e00e38792a3de2cd09ae0fb93b48895006ee2bf5504686a2957ffbfb19b868/image.jpg",
    price:
      "Price: $2,500,000",
    username: "Wavell Heights",
    imageDescription:
      "Wavell Heights House",
    propertyInfo: "🛌 5 🛁 2 🚗 2 635㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/d4e9e6fe4544945ce6d4e4528c26ef38fa5e97f42fca2926d9f2c46ef665f7fe/image.jpg",
    price:
      "Price: $1,825,000",
    username: "Nundah",
    imageDescription:
      "Nundah House",
    propertyInfo: "🛌 5 🛁 3 🚗 2 660㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/cc0508556d55d660ba32c7c9838c9608cdc71e1b4d94277c6ed18248ccdb420f/image.jpg",
    comment:
      "Price: $1,045,000",
    username: "Fig Tree Pocket",
    imageDescription:
      "Fig Tree Pocket House",
    propertyInfo: "🛌 3 🛁 2 🚗 1 615㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/c8b9bab5b1feba005659a4cf7ccba47dce263a6dc1cf00c8630f55a172795ef3/image.jpg",
    price:
      "Price: $740,000",
    username: "Bowen Hills",
    imageDescription:
      "Bowen Hills Apartment",
    propertyInfo: "🛌 2 🛁 2 🚗 1 78㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/873c3ba701d3a9c9118bc9d3b8727888523053febf2fdf153f6336e8436d572c/image.jpg",
    price:
      "Price By Negotiation",
    username: "Mount Gravatt East",
    imageDescription:
      "Mount Gravatt East House ",
    propertyInfo: "🛌 4 🛁 2 🚗 2 800㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/44ab78bda3f99dc4171a6467967166d4aeeee8874868a7518b48fff5a2264ddb/image.jpg",
    price:
      "Price: $582,000",
    username: "Newstead",
    imageDescription:
      "Newstead Apartment",
    propertyInfo: "🛌 1 🛁 1 🚗 1 64㎡ ",
  },
  {
    imgSrc:
      "https://i2.au.reastatic.net/800x600/2105e45edc6b06f15ed75b9ee8570f54dc85783b6bb8b11a73240af555ae1184/image.jpg",
    price:
      "Price: $1,391,000",
    username: "Toowong",
    imageDescription:
      "Toowong House",
    propertyInfo: "🛌 3 🛁 1 🚗 1 600㎡ ",
  },
];

export default fakeDataList;
