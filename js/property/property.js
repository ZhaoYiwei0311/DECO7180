import fakeDataList from "../../data/fakePropertyData.js";




/* Reference */
/*
The code snippet below has been sourced from Siyin Ye‘s (one of my team members) repository on GitHub.
https://github.com/SereneYe/DECO7140/blob/main/src/website_implementation/js/blog.js

The code snippet has been adapted to suit for property masonry rendering.
*/

// Initiate Masonry
const masonry = document.querySelector(".container-photo");
const divider1 = masonry.querySelector(".divider1");

// variables
let pageSize = 12;
let propertyCount = 0;
let colHeights = [0, 0, 0, 0]; // each column's height
let observer; // intersection observer

let propertyNumbers = 0;

const savedProperties = JSON.parse(localStorage.getItem('savedProperties'));

let savePropertiesSet = new Set();

if (savedProperties) {
    console.log(savedProperties.savedProperties)
    savePropertiesSet = new Set(JSON.parse(savedProperties.savedProperties)) ;
    console.log(savePropertiesSet)
}


function loadProperty() {
    for (let i = propertyNumbers; i < propertyNumbers + pageSize; i++) {
        let dividedIndex = i % pageSize;
        createProperty(dividedIndex);

        let saveButton = document.getElementById(`save_button_${i}`);
        if (!savePropertiesSet.has(i)) {
            saveButton.innerText  = "SAVE";
            saveButton.classList.add("save-button")
            saveButton.classList.remove('remove-button')
        } else {
            saveButton.innerText  = "REMOVE"
            saveButton.classList.remove("save-button")
            saveButton.classList.add('remove-button')
        }


        saveButton.addEventListener('click', function() {
            console.log('button =', this.id, savePropertiesSet, i)
            if (savePropertiesSet.has(i)) {
                console.log('exists')
                savePropertiesSet.delete(i);
                this.innerText  = "SAVE";
                this.classList.add("save-button")
                this.classList.remove('remove-button')
                console.log(savePropertiesSet)
            } else {
                savePropertiesSet.add(i);
                this.innerText  = "REMOVE"
                this.classList.remove("save-button")
                this.classList.add('remove-button')
            }
            const savedProperties = {'savedProperties': JSON.stringify([...savePropertiesSet]), 'pageSize': pageSize}
            localStorage.setItem('savedProperties', JSON.stringify(savedProperties));
        });
    }
    propertyNumbers += pageSize;
    console.log('propertyNumber =', propertyNumbers)

}

// function observe(property) {
//     if (!observer) {
//         observer = new IntersectionObserver((entries) => {
//             if (entries.length === 1 && entries[0].isIntersecting) {
//                 loadProperty();
//                 observer.unobserve(entries[0].target);
//             }
//         });
//     }
//     observer.observe(property);
// }

function createProperty(i) {
    const fakeData = fakeDataList[i];
    const propertyElement = document.createElement("div");
    propertyElement.classList.add("property");
    propertyElement.setAttribute("tabindex", "0");
    // hide property at beginning
    propertyElement.style.position = "fixed";
    propertyElement.style.top = 0;
    propertyElement.style.left = 0;
    propertyElement.style.visibility = "hidden";

    const propertyMarkup = `
      <img src="${fakeData.imgSrc}" class="property-img" alt=${fakeData.imageDescription} />
      <div class="property-content">
          <p class="property-attribute">💰 Property Price:
            <span class="property-price">${fakeData.price}</span>
          </p>
          <p class="property-name">🏡 ${fakeData.name}</p>
           <a class="property-link" href="rank.html#${fakeData.name}">👉 See Suburb Info</a>
          <div class="property-line-container">
              <div class="buttons-container">
                <button class="save-button" id="save_button_${i + propertyNumbers}">SAVE</button>
              </div>
              <p class="property-info">${fakeData.propertyInfo}</p>
          </div>
         
      </div>
  `;

    propertyElement.innerHTML = propertyMarkup;
    document.body.append(propertyElement);

    const propertyIndex = propertyCount;
    const colIndex = (propertyIndex + 1) % 3;
    let propertyHeight = propertyElement.clientHeight;
    if (propertyHeight < 400) {
        propertyHeight = 400;
    }
    colHeights[colIndex] += propertyHeight;
    setMasonryHeight();

    masonry.insertBefore(propertyElement, divider1);
    propertyCount++;

    propertyElement.style.position = "";
    propertyElement.style.visibility = "";
    propertyElement.classList.add("show");

    // Listen for the end of the animation
    propertyElement.addEventListener("animationend", () => {
        // Remove the 'show' class and add the 'hover' class
        propertyElement.classList.remove("show");
        propertyElement.classList.add("property-hover");
        // alert('end')
    });


    console.log(propertyNumbers);
    // if (propertyNumbers % pageSize === 0) {
    //     // alert(i);
    //     observe(propertyElement);
    // }
}

// function updatePropertyHeight(imgElement) {
//     return new Promise((resolve) => {
//         const propertyElement = imgElement.parentElement;
//         const contentElement = propertyElement.querySelector(".property-content");
//         const imgHeight = imgElement.clientHeight;
//         const contentHeight = contentElement.clientHeight;
//         propertyElement.style.height = `${imgHeight + contentHeight}px`;
//         resolve();
//     });
// }

function setMasonryHeight() {
    masonry.style.height = Math.max(...colHeights) + "px";
}

// handle window resize
function resetMasonryHeight() {
    colHeights = [0, 0, 0, 0];
    document.querySelectorAll(".property").forEach((property, index) => {
        const propertyHeight = property.clientHeight;
        const colIndex = (index + 1) % 3;
        colHeights[colIndex] += propertyHeight;
    });
    setMasonryHeight();
}



window.addEventListener("resize", resetMasonryHeight);

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY; // Current scroll position
    let windowHeight = window.innerHeight; // Visible window height
    let documentHeight = document.documentElement.scrollHeight; // Full document height
    // console.log('scroll =',scrollTop, 'windowHeight =', windowHeight, 'documentHeight =', documentHeight)

    // Bugs when scroll too fast
    if (scrollTop + windowHeight >= documentHeight - windowHeight * 2) {
        // alert('loading');
        loadProperty();
    }
});
//////////
loadProperty();



/* End code snippet */
