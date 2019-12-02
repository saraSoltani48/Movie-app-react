import React ,{Component}from 'react';
import "./search-Style.css";
import {
    Form,
    FormControl,
    Button,
    Navbar
  } from "react-bootstrap";
import Ratingmovies from '../Rating/Rating';

 class Search extends Component {

    state={

        count:0,
        condition:false    }

   


    render() {
        return (
            <div>
                <Navbar className="bg-light justify-content-between">
        <div></div>

  <Form inline className="fomulaire">
    <FormControl type="text" placeholder="Search for a movies" className=" mr-sm-2 myInput" 
    onChange={(e)=>{this.props.changeName(e.target.value)}} />
    <Button type="submit">Submit</Button>
  </Form>
</Navbar>

            </div>
        )
    }
}
export default Search;
   
   