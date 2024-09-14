import View from "./view.js";

export class PreviewView extends View {
  _generateMarkup() {
    const suburb = window.location.hash.slice(1);
    return `<li class="rank">
            <a class="rank-link ${
              this._data.suburb === suburb ? "rank-link--active" : ""
            }" href="#${this._data.suburb}">
              <figure class="rank-fig">
                <img src="${this._data.imageUrl}" alt="${
      this._data.imageDescription
    }" />
              </figure>
              <div class="rank-data">
                <h4 class="rank-title">${this._data.suburb}</h4>
              </div>
            </a>
          </li>
    `;
  }
}

class RanksView extends View {
  _parentElement = document.querySelector(".rank-results");

  _generateMarkup() {
    const resultsArray = Object.values(this._data);
    const previewView = new PreviewView();
    return resultsArray
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new RanksView();
