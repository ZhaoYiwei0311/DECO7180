import View from "./view.js";

export class PreviewView extends View {
  _generateMarkup() {
    const suburb = window.location.hash.slice(1);
    return `<li class="preview">
            <a class="preview__link ${
              this._data.suburb === suburb ? "preview__link--active" : ""
            }" href="#${this._data.suburb}">
              <figure class="preview__fig">
                <img src="${this._data.imageUrl}" alt="${
      this._data.imageDescription
    }" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.suburb}</h4>
              </div>
            </a>
          </li>
    `;
  }
}

class RanksView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No event found for your query! Please try again!";
  _message = "";

  _generateMarkup() {
    const resultsArray = Object.values(this._data);
    const previewView = new PreviewView();
    return resultsArray
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new RanksView();
