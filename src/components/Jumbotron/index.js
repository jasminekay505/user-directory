import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Employee Directory</h1>
                <p class="lead">Sort employees alphabetically by clicking the first or last name column or search for a specific employee using the search bar.</p>
            </div>
        </div>
    )
}

export default Jumbotron;