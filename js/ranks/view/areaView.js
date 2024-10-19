import View from "./view.js";

/* Reference */
/*
The code snippet below has been sourced from Siyin Ye‘s (one of my team members) repository on GitHub.
https://github.com/SereneYe/DECO7140/blob/main/src/website_implementation/js/events/view/eventView.js

The code snippet has been modified to suit the needs of the project.
*/

// AreaView class for rendering the suburb details
class AreaView extends View {
  _parentElement = document.querySelector(".suburb");


  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) => {
      window.addEventListener(ev, handler);
    });
  }

  _generateMarkup() {
    return `
        <figure class="suburb-fig">
          <img src="${this._data.imageUrl}" alt="${this._data.imageDescription}" class="suburb-img"/>
          <h1 class="suburb-title">
            <span>🏘️ ${this._data.suburb}</span>
          </h1>
        </figure>

     <div class="suburb-details">
    <div class="suburb-info-row">
            <h2 class="heading--2">📪 Postcode :  </h2>
            <span class="suburb-info-data">${this._data.postcode}</span>
          </div>
          

          <div class="suburb-info-row">
            <h2 class="heading--2">💰 Median House Value : </h2>
            <span class="suburb-info-data">$ ${this._data.housePriceFormatted} </span>
            <h2 class="heading--2">  [📈 Annual Growth: </h2>
            <span class="suburb-info-data">${this._data.annualChange}%</span>
            <h2 class="heading--2">]</h2>
          </div>

          <div class="suburb-info-row">
            <h2 class="heading--2">💰 Median Rental Price : </h2>
            <span class="suburb-info-data">$ ${this._data.rentalPriceFormatted} </span>
            <h2 class="heading--2"> [📈 Past 12 month growth: </h2>
            <span class="suburb-info-data">${this._data.rentalChange}%</span>
            <h2 class="heading--2">]</h2>
          </div>
 
          <div class="suburb-info-row">
            <h2 class="heading--2">🗂️ House Hold Type :  </h2>
            <span class="suburb-info-data">${this._data.holdType}</span>
          </div>

          <div class="suburb-info-row">
          <h2 class="heading--2">📍 Location: </h2>
            <a class="suburb-info-data suburb-info-buttons" href="index.html#${this._data.suburb}" target="_blank">
              <span>See on the map</span>
            </a> 
          </div>
          
        <div class="suburb-info-row">
          <h2 class="heading--2">📈 Suburb Overall Safety Score : </h2>
          <span class="suburb-score-bold">${this._data.score}/100</span>
        </div>  

        <div class="suburb-info-row">
          <h2 class="heading--2">👩🏼‍🦱 Past 5 year data  :</h2>
          <a class="suburb-info-data suburb-info-buttons" href="chart.html#${this._data.suburb}" target="_blank">
              <span>See More Details</span>
            </a> 
          
        </div>  

        <div class="suburb-info-column">
          <h2 class="heading--2">📝 Suburb Description : </h2>
          <span class="suburb-score">${this._data.suburbDescription}</span>
        </div>  
    `;
  }
}

export default new AreaView();

/* End code snippet */
