import React, { Component } from "react";
import ListMovie from "./Components/Card-list/list-Movie";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search/search";
import Rating from "./Components/Rating/Rating";

class App extends Component {
  state = {
    Mytab: [
      {
        name: "Joker",
        image: " https://pbs.twimg.com/media/EEkf3uiW4AASpYV.png:large",
        year: "2019",
        rating: 4
      },
      {
        name: "Van Helsing",
        image:
          "http://fr.web.img6.acsta.net/medias/nmedia/18/35/19/42/18377156.jpg",
        rating: 2,
        year: "2019"
      },

      {
        name: " Maléfique ",

        image:
          "https://musicart.xboxlive.com/7/37295100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        rating: 1,
        year: "2014"
      },

      {
        name: " twilight",
        image:
          " https://www.actualitte.com/images/actualites/images/twilight.jpg",
        rating: 5,
        year: "2008"
      }
    ],
    // tab2:Mytab,
    userInput: "",
    rating: 0
  };

  // onChangeStarts=(rate)=>{
  //   this.setState({

  //       count:rate
  //   })

  changeName = input => {
    this.setState({
      userInput: input
    });
  };

  filterStar = count => {
    this.setState({
      rating: count
    });
  };
  AddItemMovie=(el)=>{
    this.setState({
      Mytab:this.state.Mytab.concat(el)
    })
  }
    

  render() {
    return (
      <div className="App">
        <Search changeName={this.changeName} />
        <Rating
          clicked={true}
          count={this.state.rating}
          filterStar={this.filterStar}
        />

        <ListMovie
          tableMovie={this.state.Mytab.filter(el=>el.name.toLowerCase().includes(this.state.userInput.toLowerCase().trim())
            && (el.rating >= this.state.rating))
            // this.state.userInput
            //   ? this.state.Mytab.filter(
            //       el =>
                   
            //         el.name
            //           .toLowerCase()
            //           .includes(this.state.userInput.toLowerCase())
            //     )
            //   : this.state.Mytab.filter(el=>el.rating>=this.state.rating)
          }
          AddItemMovie={this.AddItemMovie}        />
      </div>
    );
  }
}

export default App;
