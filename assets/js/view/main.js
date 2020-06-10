import Recipes from "../data/recipes.js";
import "../component/modal-details.js"
import "../component/recipe-list.js";
import "../component/search-bar.js";

const main = () => {


  const searchBar = document.querySelector("search-bar");
  const recipeList = document.querySelector("recipe-list");
  const modalDetails = document.createElement("modal-details");


  const searchButtonClicked = async () => {


    try {

      let results = await Recipes.searchRecipe(searchBar.value);
      renderResult(results);


    } catch (error) {

      errorMessage(error);
    }

  };

  const renderResult = results => {

    recipeList.recipes = results;
    getModalDetailsRecipe();


  }

  const getModalDetailsRecipe = () => {

    const modalButtons = document.querySelectorAll(".modal-button");
    modalButtons.forEach(modalButton => {

      modalButton.addEventListener("click", async function () {

        const recipeUri = this.dataset.label;

        const detailsRecipe = await Recipes.searchDetailsRecipe(recipeUri);
        modalDetails.detailsRecipe = detailsRecipe;

      })

    });

  }

  const errorMessage = error => {
    recipeList.renderError(error);

  }

  searchBar.clickEvent = searchButtonClicked;

}

export default main;