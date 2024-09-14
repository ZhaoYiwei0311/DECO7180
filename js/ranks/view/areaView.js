import View from "./view.js";

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
            <span>${this._data.suburb}</span>
          </h1>
        </figure>

     <div class="suburb-details">
          
     
     <div class="suburb-info-row">
          <h2 class="heading--2">📪 Postcode :  </h2>
            <span class="suburb-info-data"
              >${this._data.postcode}</span>
        </div>

        
          <div class="suburb-info-row">
            <h2 class="heading--2">📅 House Price :  </h2>
            <span class="suburb-info-data">$ ${this._data.housePrice}</span>
          </div>

          <div class="suburb-info-row">
          <h2 class="heading--2">📍 Location: </h2>
            <a class="suburb-info-data suburb-info-buttons" href="map.html#${this._data.suburb}" target="_blank">
              <span>See on the map</span>
            </a> 
          </div>
          
        <div class="suburb-info-row">
          <h2 class="heading--2">📝 Overall Score : </h2>
          <span class="suburb-score">${this._data.score}</span>
        </div>  

        <div class="suburb-info-row">
          <h2 class="heading--2">👩🏼‍🦱 Past 10 year data  :</h2>
          <a class="suburb-info-data suburb-info-buttons" href="chart.html#${this._data.suburb}" target="_blank">
              <span>See More Details</span>
            </a> 
          
        </div>  
    `;
  }
}

export default new AreaView();
