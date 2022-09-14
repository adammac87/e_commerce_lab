
import React from "react";



const CakeItem = ({cake, addToBasket}) => {
    const handleClick = () => {
        console.log(cake.id)
        addToBasket(cake.id)
    }
    return (
        <>
        <li>
        {cake.name}
        <br></br>
        £{cake.price}

        </li>
        <button onClick={handleClick}>Click</button>
        </>
    )
}

export default CakeItem;