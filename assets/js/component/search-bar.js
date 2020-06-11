class SearchBar extends HTMLElement {

    connectedCallback() {

        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector(".search").value;
    }

    render() {

        this.innerHTML = `
 
        <style>

        .search {

            outline: none;
            border: 1px solid #2f3640;
            border-radius: 100px 0 0 100px;
        
        
        }
        
        input.search:focus {
        
            box-shadow: 0 0 0 3px rgba(47, 54, 64, 0.5);
            border-color: rgba(47, 54, 64, 0.5);
        }
        
        .recipe {
            height:38px;
            border-radius: 100px;
        
        }

        </style>
        
        <div id="recipe" class="container m-5 mx-auto">

            <div class="row m-4">

                <div class="container">
                    <h3 class="text-center">Search Recipe</h3>
                </div>

            </div>

            <div class="row">

                <div class="input-group mb-3 w-50 mx-auto">
                    <input type="text" class="search pl-3 mx-auto form-control keywordRecipe"
                        placeholder="Type recipe...">
                    <div class="input-group-append">
                        <button class="btn btn-outline-dark recipe searchRecipe" type="button" id="button-addon2">
                        <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>

            </div>
        
        `

        this.querySelector(".searchRecipe").addEventListener("click", this._clickEvent);

    }

}

customElements.define("search-bar", SearchBar);