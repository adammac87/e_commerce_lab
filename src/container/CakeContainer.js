import React, {useState, useEffect} from "react";
import CakeList from "../components/CakeList";
import CakeItem from "../components/CakeItem";

const CakeContainer = () => {
    const cakeStock = [
        {
            id: 1,
            name: "Marble Cake",
        },
        {
            id: 2,
            name: "Carrot Cake",
        },
        {
            id: 3,
            name: "Lemon Cake",
        }
    ]

    const [cakes, setCakes] = useState(cakeStock)

    return (
        <CakeList cakes={cakes}/>
    )
}

export default CakeContainer;