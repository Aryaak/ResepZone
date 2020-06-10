class ModalDetails extends HTMLElement {



    set detailsRecipe(details) {

        this._detailsRecipe = details;
        this.render();
    }

    getDetailsList(list) {

        const contentList = document.createElement("ul");

        list.forEach(item => {
            let contentItem = document.createElement("li");
            let itemText = document.createTextNode(item);
            contentItem.appendChild(itemText);
            contentList.appendChild(contentItem);

        })

        return contentList;
    }

    render() {

        this.innerHTML = "";

        const ingredients = this.getDetailsList(this._detailsRecipe.ingredientLines);
        const healthLabels = this.getDetailsList(this._detailsRecipe.healthLabels);

        this.innerHTML = ` 

        <style>
           
        .modal {

            background-color: rgba(44, 62, 80, .3);
        }
        
    
        </style>
        
        <div class="modal-header">
            <h5 class="modal-title" id="detailsRecipeLabel">${this._detailsRecipe.label}</h5>
            </div>

            <div class="modal-body">

            Ingredient :
            
            ${ingredients.innerHTML}

            <br>

            Health Labels :

            ${healthLabels.innerHTML}

            </div>

            <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
        </div>`;
        document.querySelector(".modal-content").appendChild(this);


    }

}

customElements.define("modal-details", ModalDetails);