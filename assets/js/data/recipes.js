class Recipes {

    static searchRecipe(keyword = "") {

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${keyword}&app_id=418118ff&app_key=46efde39e9399cf9bdab1e63345e5e63`)
            .then(recipes => recipes.json())
            .then(recipesJson => {

                if (recipesJson.more) {

                    return Promise.resolve(recipesJson.hits);


                } else {

                    return Promise.reject(`${keyword} not found`);

                }

            })


    }

    static searchDetailsRecipe(keyword = "") {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${keyword}&app_id=418118ff&app_key=46efde39e9399cf9bdab1e63345e5e63&to=1`)
            .then(recipes => recipes.json())
            .then(recipesJson => {

                return Promise.resolve(recipesJson.hits[0].recipe);

            })
    }

}

export default Recipes;