import React, {Component} from "react";
import Pockets from "../../components/Pockets";
import axios from "axios";
import "./style.css";

class Base extends Component {
    state = {
        pockets: [{name: "All"}],
        items: [],
        currentPocket: undefined,
        modal: false,
        allPockets: []
    }

    componentDidMount = () => {
        this.getPockets();
        this.getItems();
    }

    getPockets = async () => {
        const {data} = await axios.get("/api/pockets");
        console.log(data);

        this.setState({
            allPockets: data.allPockets,
            pockets: [...this.state.pockets, ...data.filteredPockets]
        });
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
            this.state.items.map(item => 
            <div className = "item">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.quantity}</p>
            </div>) 
            : 
            filteredItems.map(item =>
            <div className = "item">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.quantity}</p>
            </div>
            );
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    render() {
        return(
            <main>
                <p id = "logo">The Bottomless Box 3.0</p>
                <nav>
                    <div id = "navbuttons">
                        {this.renderPockets()}
                    </div>
                    <div onClick = {this.toggleModal} id = "add-pocket" className = "pocket">
                        <p>+</p>
                    </div>
                </nav>

                <h1 id = "current-pocket">{this.getCurrentPocketName()}</h1>
                <header className = "item">
                    <p>Item</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </header>
                
                <section id = "item-box">
                    {this.renderItems()}
                </section>
                {
                    this.state.modal ? 
                    <Pockets pockets = {this.state.allPockets}/>
                    :
                    ""
                }
               
                <footer>
                    
                </footer>
            </main>
        )
    }
}

export default Base;