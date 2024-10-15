import fakeDataList from "../../data/fakePropertyData.js";

function loadSavedProperties() {
    const savedProperties = fakeDataList.slice(0, 8); // Select 8 properties to display in carousel
    const carousel = document.getElementById('carousel'); // Get carousel container

    savedProperties.forEach((property) => {
        const propertyElement = document.createElement('div');
        propertyElement.classList.add('property'); // Add property class for styling

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


        propertyElement.innerHTML = propertyMarkup; // Insert markup into property div
        carousel.appendChild(propertyElement); // Append to the carousel container
    });
}

// Initialize the saved properties carousel when the page loads
window.addEventListener("load", loadSavedProperties);

// Handle carousel scrolling
let currentIndex = 0;
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const carousel = document.getElementById('carousel');

leftBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

rightBtn.addEventListener('click', () => {
    currentIndex = currentIndex + 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});
