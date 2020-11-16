import React from "react";
import axios from "axios";
import "./style.css";

function Pockets(props) {
    return(
        <div id = "pocket-modal">
            {
                props.pockets.map(pocket => {
                    return (
                        <div>
                            <img src = {"/images/" + pocket.name + ".png"}></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pockets;