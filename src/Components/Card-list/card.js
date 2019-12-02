import React from 'react'
import ListMovie from "./list-Movie";
import "./Style.css";
import Ratingmovies from '../Rating/Rating';

  const Card=({name,image,rating,year})=> {
    return (
       
       
            
     <div className="cards" >
  <img src={image} className="card-img-top image"  alt="..."/>
            
  <div className="card-body">

      <p> {name} </p>
      <p>{year}</p>
    
      <Ratingmovies clicked={false } count={rating} /> 

        </div>
        </div>
       
    )
}
export default Card;

