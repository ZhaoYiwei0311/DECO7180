import View from "./view.js";

/* Reference */
/*
The code snippet below has been sourced from Siyin Ye‘s (one of my team members) repository on GitHub.
https://github.com/SereneYe/DECO7140/blob/main/src/website_implementation/js/events/view/resultsView.js

The code snippet has been modified to suit the needs of the project.
*/

// PreviewView class for rendering the suburb details
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
                 <p class="rank-score">📫 ${this._data.postcode} ;   💰$${
      this._data.housePriceFormatted
    }  ; score 📊: ${this._data.score}</p>
              </div>
            </a>
          </li>
    `;
  }
}

// Export an instance of the class
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
/* End code snippet */
