import React, {Component} from "react";
import axios from "axios";
import "./style.css";

class Base extends Component {
    state = {
        pockets: [{name: "All"}],
        items: [],
        currentPocket: undefined
    }

    componentDidMount = () => {
        this.getPockets();
        this.getItems();
    }

    getPockets = async () => {
        const {data} = await axios.get("/api/pockets/filtered");

        this.setState({pockets: [...this.state.pockets, ...data]});
    }

    getCurrentPocketName = () => this.state.pockets.filter(pocket => pocket.pocket_id === this.state.currentPocket)[0].name;
    
    getItems = async () => {
        const {data} = await axios.get("/api/items");
        this.setState({items: data});
    }

    createItem = async (data) => axios.post("/api/item", data);
    

    changePocket = (pocketId) => this.setState({currentPocket: pocketId});
    

    renderPockets = () => {
        return this.state.pockets.map(pocket => 
            <img 
                className = "pocket" 
                src = {"./images/" + pocket.name  + ".png"} 
                alt = {pocket.name}
                onClick = {() => this.changePocket(pocket.pocket_id)}>
            </img>
        );
    };

    renderItems = () => {
        const filteredItems = this.state.items.filter(item => item.pocket_id === this.state.currentPocket);
        return this.state.currentPocket === undefined ? 
            this.state.items.map(item => <p>{item.name}</p>) 
            : 
            filteredItems.map(item =><p>{item.name}</p>);
    }

    render() {
        return(
            <main>
                <nav>
                    {this.renderPockets()}
                </nav>
                <h1>{this.getCurrentPocketName()}</h1>
                <section id = "item-box">
                    {this.renderItems()}
                </section>
               
                
            </main>
        )
    }
}

export default Base;