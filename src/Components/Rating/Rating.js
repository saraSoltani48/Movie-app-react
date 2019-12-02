import React from 'react';
import "./Rating.css";

const Ratingmovies =({count,filterStar,clicked}) => {

    console.log(count)
   let tabStart=[];

for (let i=0; i< 5; i++){

    if (i < count){

        tabStart.push(<span 
    style={{cursor: "pointer" }} key={i}


    onClick={()=>{ clicked&&filterStar(i+1)} } >★</span>) } 

        else {

            tabStart.push(<span  key={i} style={{cursor: "pointer" }} 
            
            onClick={()=>clicked? filterStar (i+1):null}>☆</span>)
        }
    }
return <div className="starts">{tabStart}</div>
}

export default Ratingmovies ;


