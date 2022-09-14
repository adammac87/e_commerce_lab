
import React from "react";
import CakeList from "./CakeList";


const shoppingBasket = ({cakesInBasket, }) => {

const total = cakesInBasket.reduce(
  (subTotal, cake) => (subTotal += cake.price * cake.quantity),
  0
)

const totalBought = cakesInBasket.reduce(
  (subTotal, cake) => (subTotal += cake.quantity* cake.quantity),
  0
)


    return (
      <>
        <h2>Shopping Basket</h2>

        
          {cakesInBasket.map((cake) => {
            return (
              <ul>
                <li>
                  {cake.name}
                  {cake.quantity}
                  <br></br> £{cake.price}
                  
                  <br></br>
                </li>
              </ul>

              
            )
          })}
        <p>You Have bought  <articles>{totalBought}</articles>     amount of cakes</p>
        <p>Total Price<br></br>{total}</p>
      </>
    )
    
}
 export default shoppingBasket;