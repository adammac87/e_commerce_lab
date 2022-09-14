
import React from "react";
import CakeList from "./CakeList";


const shoppingBasket = ({cakesInBasket, }) => {

    return (
        <>
        <h2>Shopping Basket</h2>
        <ul>
        {cakesInBasket.map(cake => {
            return ( 
                <li> {cake.name}</li>

            )
        })}
       

        </ul>
        </>
    )
    
}
 export default shoppingBasket;