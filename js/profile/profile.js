import fakeDataList from "../../data/fakePropertyData.js";

let savedPropertiesIndexList = null;
let pageSize = 12;

const savedProperties = JSON.parse(localStorage.getItem('savedProperties'));
if (savedProperties) {
    console.log(savedProperties.savedProperties)
    savedPropertiesIndexList = JSON.parse(savedProperties.savedProperties) ;
    pageSize = savedProperties.pageSize;
}

function loadSavedProperties() {
    if (savedPropertiesIndexList != null && savedPropertiesIndexList.length !== 0) {
        let savedList = []
        for (let i = 0; i < savedPropertiesIndexList.length; i++) {
            savedList.push(fakeDataList[savedPropertiesIndexList[i] % pageSize]);
        }
        const carousel = document.getElementById("carousel"); // Get carousel container

        savedList.forEach((property) => {
            const propertyElement = document.createElement("div");
            propertyElement.classList.add("property"); // Add property class for styling

            // Reuse the property markup from property.js
            const propertyMarkup = `
  <div class="property-wrapper">
      <img src="${property.imgSrc}" class="property-img" alt="${property.imageDescription}" />
      <div class="property-content">
          <p class="property-attribute">
              <span>${property.price}</span>
          </p>
          <p class="property-name">${property.name}</p>
          <p class="property-info">${property.propertyInfo}</p>
          <a class="property-link" href="rank.html#${property.name}">👉See Info👈</a>
      </div>
  </div>
`;
            propertyElement.innerHTML = propertyMarkup;
            carousel.appendChild(propertyElement);
        });
    } else {
        const carousel = document.getElementById("carousel");
        const propertyElement = document.createElement("div");
        propertyElement.classList.add("property"); // Add property class for styling

        // Reuse the property markup from property.js
        const propertyMarkup = `
  <div class="property-wrapper">

      <div class="property-content">
          <p class="property-attribute">
              <span>The wish list is empty. <br><br>Why not add some nice properties?</span>
          </p>

      </div>
  </div>
`;
        propertyElement.innerHTML = propertyMarkup;
        carousel.append(propertyElement);

        const leftBtn = document.querySelector(".left-btn");
        const rightBtn = document.querySelector(".right-btn");
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
    }
}


// Initialize the saved properties carousel when the page loads
window.addEventListener("load", loadSavedProperties);

// Handle carousel scrolling
let currentIndex = 0;
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const carousel = document.getElementById("carousel");

leftBtn.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

rightBtn.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, savedPropertiesIndexList.length - 1);
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});


