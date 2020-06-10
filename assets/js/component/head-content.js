import styling from "./styling.js";

class HeadContent extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        }).innerHTML = `${this.render()}`;
    }

    render() {

        return `

        ${styling};
        
        <style>
 
        #overlay {

            background-color: rgba(0, 0, 0, 0.5);
            height: 100%;
            position:absolute;
            right: 0;
            left: 0;
            top: 0;
        }
        
        .jumbotron {
        
            background: none;
        
        }
        
        .getstart {
        
            width: 150px;
            border-radius: 200px;
            border-width: 2px;
        
        }

        </style>

        <div id="overlay">

        <div class="title">
            <h1 class="text-center p-5">ResepZone</h1>
        </div>

        <div class="jumbotron text-center my-auto">
            <p class="display-4">Free recipes for your kitchen</p>
            <p class="lead">ResepZone provides many food recipes that you can try in the kitchen</p>
            <a href="#recipe"><button type="button" class="btn btn-outline-light getstart">Start</button></a>
        </div>

        </div>

        `;

    }

}

customElements.define("head-content", HeadContent);