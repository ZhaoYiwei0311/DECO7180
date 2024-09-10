import View from "./view.js";

class AreaView extends View {
  _parentElement = document.querySelector(".event");
  _errorMessage = "We could not find that event. Please try another one!";
  _message = "";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) => {
      window.addEventListener(ev, handler);
    });
  }

  _generateMarkup() {
    return `
        <figure class="event__fig">
          <img src="${this._data.imageUrl}" alt="${this._data.imageDescription}" class="event__img"/>
          <h1 class="event__title">
            <span>${this._data.suburb}</span>
          </h1>
        </figure>

     <div class="event__details">
          
     
     <div class="event__info-row">
          <h2 class="heading--2">📪 Postcode :  </h2>
            <span class="event__info-data"
              >${this._data.postcode}</span>
        </div>

        
          <div class="event__info-row">
            <h2 class="heading--2">📅 House Price :  </h2>
            <span class="event__info-data">${this._data.housePrice}</span>
           
          </div>

          <div class="event__info-column">
          <h2 class="heading--2">📍 Location: </h2>
  
            <span class="event__info-data">${this._data.address}</span>
            <a class="event__info-data event__info-buttons" href="map.html" target="_blank">
              <span>See on the map</span>
            </a> 
          </div>
          
        <div class="event__info-column">
          <h2 class="heading--2">📝 Overall Score : </h2>
          <span class="event__organizer">${this._data.score}</span>
        </div>  

        <div class="event__info-row">
          <h2 class="heading--2">👩🏼‍🦱 Heading 222  :</h2>
          <a class="event__info-data event__info-buttons" href="#" target="_blank">
              <span>See More Details</span>
            </a> 
          
        </div>  
    `;
  }
}

export default new AreaView();
