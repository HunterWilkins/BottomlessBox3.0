import React, {Component} from "react";
import axios from "axios";
import "./style.css";

class Base extends Component {
    state = {
        pockets: [{name: "All"}],
        items: []
    }

    componentDidMount = () => {
        this.getPockets();
        this.getItems();
    }

    getPockets = async () => {
        const {data} = await axios.get("/api/pockets/filtered");

        this.setState({pockets: [...this.state.pockets, ...data]});
        console.log(this.state);
    }
    
    getItems = async () => {
        const {data} = await axios.get("/api/items");
        this.setState({items: data});
    }

    createItem = async (data) => {
        axios.post("/api/item", data);
    }

    renderPockets = () => {
        return this.state.pockets.map(pocket => 
            <img className = "pocket" src = {"./images/" + pocket.name  + ".png"} alt = {pocket.name}></img>
        );
    };

    render() {
        return(
            <main>
                <nav>
                    {this.renderPockets()}
                </nav>
                <h1>Hello!</h1>
                <section>

                </section>
                <button onClick = {() => {
                    this.createItem({
                        name: "Random Food Item",
                        user_id: 1,
                        price: 12.75,
                        quantity: 1,
                        pocket_id: 5
                    });
                }}>Add Item</button>
                
            </main>
        )
    }
}

export default Base;