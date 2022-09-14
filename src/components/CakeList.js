import React from "react";
import CakeItem from "./CakeItem";

const CakeList = ({cakes}) => {
    const cakeItems = cakes.map((cake) => {
        return (
            <CakeItem cake={cake} key={cake.id}/>
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
