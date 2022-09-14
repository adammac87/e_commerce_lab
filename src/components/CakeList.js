import React from "react";
import CakeItem from "./CakeItem";

const CakeList = ({cakes, addToBasket}) => {
    const cakeItems = cakes.map((cake) => {
        return (
            <CakeItem cake={cake} addToBasket={addToBasket} key={cake.id}/>
        );
    });

    return (
        <div>
            <ul>
                {cakeItems}

            </ul>
        </div>
    );
}

export default CakeList;
