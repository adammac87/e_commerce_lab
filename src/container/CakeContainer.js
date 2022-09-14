import React, {useState, useEffect} from "react";
import CakeList from "../components/CakeList";
import ShoppingBasket from "../components/ShoppingBasket";
import CakeItem from "../components/CakeItem";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from "../components/Home";
import ShowCake from "../components/ShowCakes";





const CakeContainer = () => {
    const [basket, setBasket] = useState([]);
    const [addedCake, setAddedCake] = useState ([])
    const [cakes, setCakes] = useState([
      {
        id: 1,
        name: 'Bear Cake',
        price: 2.5,
        inBasket: false,
        quantity: 1,
        url: 'https://imgcdn.floweraura.com/boo-bear-cake-9909650ca-AA.jpg?tr=w-264,dpr-2,q-70',
      },
      {
        id: 2,
        name: 'Tiger Cake',
        price: 3.0,
        inBasket: false,
        quantity: 1,
        url: 'https://imgcdn.floweraura.com/cartoon-bear-designer-cake-9909630ca-A.jpg?tr=w-264,dpr-2,q-70',
      },
      {
        id: 3,
        name: 'Bird Cake',
        price: 1.5,
        inBasket: true,
        quantity: 1,
        url: 'https://imgcdn.floweraura.com/Angry-Birds-Cake.jpg?tr=w-264,dpr-2,q-70',
      },
      {
        id: 4,
        name: 'Bat Cake',
        price: 5.5,
        inBasket: true,
        quantity: 1,
        url: 'https://imgcdn.floweraura.com/batman-birthday-cake-9935280ca.jpg?tr=w-264,dpr-2,q-70',
      },
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
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact
              path='/about' element={<Home/>}
            
            />
            <Route
              exact
              path='/CakeList'
              element={<CakeList cakes={cakes} addToBasket={addToBasket} />}
            />
            <Route
              path='/ShoppingBasket'
              element={<ShoppingBasket cakesInBasket={cakesInBasket} />}
            />
            <Route
              path='/ShowCake/id'
              element={<CakeItem cakesInBasket={cakesInBasket} />}
            />
          </Routes>
        </Router>

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