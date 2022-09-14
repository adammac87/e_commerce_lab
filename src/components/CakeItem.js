
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
          <br></br>£{cake.price}
          <br></br>
          <img src={cake.url} width='150' height='150'></img>
        </li>
        <button onClick={handleClick}>Click</button>
      </>
    )
}

export default CakeItem;