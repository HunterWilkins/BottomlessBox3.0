import React, {Component} from "react";
import axios from "axios";
import "./reset.css";
import "./style.css";

class Base extends Component {
    state = {
        
    }

    apiTest = async () => {
        const response = await axios.get("/api/test");
        console.log(response);
    }

    render() {
        return(
            <main>
                <h1>Hello!</h1>
                <button onClick = {this.apiTest}>Test</button>
            </main>
        )
    }
}

export default Base;