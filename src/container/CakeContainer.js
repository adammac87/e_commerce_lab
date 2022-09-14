import React, {useState, useEffect} from "react";
import CakeList from "../components/CakeList";
// import CakeItem from "../components/CakeItem";

const CakeContainer = () => {
    const [cakes, setCakes] = useState([
        {
            id: 1,
            name: "Marble Cake",
            price: 2.50,
            inBasket: false
        },
        {
            id: 2,
            name: "Carrot Cake",
            price: 3.00,
            inBasket: false
        },
        {
            id: 3,
            name: "Lemon Cake",
            price: 1.50,
            inBasket:true
        }
    ])

    const [newCake, setNewCake] = useState("")

    const handleCakeNameChange = (e) => {
        setNewCake(e.target.value)
    
    }
 



    const addCake = (e) => {
        e.prevent()
        const copyCake = [...cakes]
        copyCake.push({name: newCake})
        setCakes(copyCake)
        setNewCake("")
    }
    const addCakeList = cakes.map((cake, index) => {
        return (
        <li key={index}>
        <span>{cake.name}</span>
         : <button onClick={() =>
            toDoDone(index)}>Add To Basket</button>
        </li>)
    });
    

    const toDoDone= (index) => {
      const copyCake = [...cakes]
      copyCake[index].inBasket = true
      setCakes(copyCake)
    }

    return (
        <>
        <CakeList cakes={cakes}/>
        <ul>{addCakeList}</ul>

        <form onSubmit = {addCake}>
        <label htmlFor="new-to-do">Add Cake</label>
        <input type="text" id = "new-cake" value ={newCake}
        onChange = {handleCakeNameChange}/>
        <input type ='submit' value='add new cake'/> 
      </form>
      </>
    )


        
        
};
    


    


export default CakeContainer;