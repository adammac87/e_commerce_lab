
import React from "react";

const CakeItem = ({cake}) => {
    return (
        <li>
        {cake.name}
        <br></br>
        £{cake.price}


        </li>
    )
}

export default CakeItem;