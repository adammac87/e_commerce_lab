import React, {useState, useEffect} from "react";
import CakeList from "../components/CakeList";
import ShoppingBasket from "../components/ShoppingBasket";
import CakeItem from "../components/CakeItem";


const CakeContainer = () => {
    const [basket, setBasket] = useState([]);
    const [addedCake, setAddedCake] = useState ([])
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

    // const [newCake, setNewCake] = useState("")

    // const handleCakeNameChange = (e) => {
    //     setNewCake(e.target.value)
    
    // }
 



    // const addCakeList = (e) => {
    //     e.prevent()
    //     const copyCake = [...cakes]
    //     copyCake.push({name: newCake})
    //     setCakes(copyCake)
    //     setNewCake("")
    // }
    const addToBasket = (itemID) => {
        console.log(itemID)
        const updatedBasket = [...basket];
        updatedBasket.push(itemID);
        setBasket(updatedBasket);

    }
    ;
    

    const toDoDone= (index) => {
      const copyCake = [...cakes]
      copyCake[index].inBasket = true
      setCakes(copyCake)
    }

    const cakesInBasket = basket.map(id => {
        return cakes.find((cake) => cake.id === id)
    })

    return (
        <>
        <CakeList cakes={cakes} addToBasket={addToBasket}/>
        <ShoppingBasket cakesInBasket={cakesInBasket}/>
        {/* <ul>{addCakeList}</ul> */}

    
        {/* <form onSubmit = {addCake}>
        <label htmlFor="new-to-do">Add Cake</label>
        <input type="text" id = "new-cake" value ={newCake}
        onChange = {handleCakeNameChange}/>
        <input type ='submit' value='add new cake'/> 
      </form> */}
      
      </>
    )


        
        
};
    


    


export default CakeContainer;