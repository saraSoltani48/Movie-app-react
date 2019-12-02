import React, { Component } from 'react'
import Card from "./card";
import "./Style.css";
import Add from '../AddMovies/Add';
 
 

class ListMovie extends Component {
   

      
            
            
    render() {
        return (
            <div className="hollyood">
            <div className="mycards">


{this.props.tableMovie.map ((el,i)=>(

<Card key={i} name={el.name} image={el.image} rating={el.rating} year={el.year} />


)) }
             
                
            </div>
            <Add AddItemMovie={this.props.AddItemMovie}/>
            </div>
        )
    }
}

export default ListMovie;