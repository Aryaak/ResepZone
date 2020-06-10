import "./recipe-item.js";

class RecipeList extends HTMLElement {

    set recipes(recipes) {

        this._recipes = recipes;
        this.render();

    }

    render() {

        this.classList.add("row", "container", "mx-auto");
        this.innerHTML = "";
        this._recipes.forEach(recipe => {

            const recipeItemElement = document.createElement("recipe-item");
            recipeItemElement.recipe = recipe;
            this.appendChild(recipeItemElement);

        })

    }

    renderError(error) {

        this.innerHTML = `
        <div class="alert alert-danger w-25 mx-auto" role="alert">
         ${error}
        </div>;
        `

    }

}
customElements.define("recipe-list", RecipeList);