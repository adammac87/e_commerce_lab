import React from "react";
import { Link } from "react-router-dom";




const ShowCake =({ cake, }) => {
return (
    <ShowCake>
    <Link to={`/showcakes/${cake.id}`}></Link>
    <p>{cake}</p>
    
    </ShowCake>
)}



export default ShowCake