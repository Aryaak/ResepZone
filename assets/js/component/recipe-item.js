class RecipeItem extends HTMLElement {

    set recipe(recipe) {

        this._recipe = recipe;
        this.render();

    }

    render() {

        this.classList.add("col-md-3", "m-4");
        this.innerHTML = `

        <style>
            .card {

                background-color: #2c3e50;
            }
            
            .modal-button {
            
                background-color: #c0392b;
            }
        </style>

        <div class="card text-light" style="width: 300px; height:550px">
                <img src="${this._recipe.recipe.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this._recipe.recipe.label}</h5>
                    <ul class="mb-3">
                      <li>food portion : ${this._recipe.recipe.yield}</li>
                      <li>diet info : ${ ( this._recipe.recipe.dietLabels.length != 0 ) ? this._recipe.recipe.dietLabels : `unkown` }</li>
                      <li>calories : ${ Math.round(this._recipe.recipe.calories)} kkal</li>
                    </ul>
                    <button type="button" class="modal-button btn" data-toggle="modal" data-target="#detailsRecipe" data-label="${this._recipe.recipe.label}">
                    <i class="fas fa-eye text-light"></i>
                    </button>
                </div>
            </div>`


    }



}

customElements.define("recipe-item", RecipeItem);