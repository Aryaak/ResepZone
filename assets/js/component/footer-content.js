import styling from "./styling.js";

class FooterContent extends HTMLElement {

    constructor() {

        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        }).innerHTML = `${this.render()}`
    }

    render() {

        return ` 
        
        ${styling};
        <style>
        
    
         
            .footer-item {

                background: none;
                border: none;

            }

            .footer-item i {

                font-size: 30px;

            }

        </style>
        
        <div class="container text-light pt-3">

        <div class="row text-center">
            <div class="col-md-4">
                <h4>ABOUT</h4>
                <p class="mb-5">ResepZone made to provide information about food and recipes that can be tried in
                    the kitchen</p>
            </div>
            <div class="col-md-4">
                <h4>FEATURES</h4>

                <ul class="list-group footer-list mb-5">
                    <li class="list-group-item footer-item p-1">Search Food</li>
                    <li class="list-group-item footer-item p-1">Get Food Information</li>
                    <li class="list-group-item footer-item p-1">Get Food Recipes</li>
                </ul>
            </div>
            <div class="col-md-4">
                <h4>CONTACT</h4>
                <ul class="list-group list-group-horizontal footer-list mb-5">
                    <a href="https://www.facebook.com/aryarizky.aryarizky.94" target="_blank" class=" text-light mx-auto">
                        <li class="list-group-item footer-item p-1"><i class="fab fa-facebook"></i></li>
                    </a>
                    <a href="https://twitter.com/4ry4k" target="_blank" class=" text-light mx-auto">
                        <li class=" list-group-item footer-item p-1"><i class="fab fa-twitter-square"></i></li>
                    </a>
                    <a href="https://github.com/Aryaak" target="_blank" class=" text-light mx-auto">
                        <li class="list-group-item footer-item p-1"><i class="fab fa-github-square"></i></li>
                    </a>
                </ul>
            </div>
        </div>

    </div>`
    }

}

customElements.define("footer-content", FooterContent);