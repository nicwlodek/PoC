import React, { Component } from 'react';
import companyName from "./companyName.png";
import './App.css';
import topListingOne from "./topListing/topListing11.jpeg";
import topListingTwo from "./topListing/toplisting2.jpeg";
import topListingThree from "./topListing/toplisting3.jpeg";

import apartment1 from "./apartments/apartment1.jpeg";
import apartment2 from "./apartments/apartment2.jpeg";
import apartment3 from "./apartments/apartment3.jpeg";
import apartment4 from "./apartments/apartment4.jpeg";
import apartment5 from "./apartments/apartment5.jpeg";
import apartment6 from "./apartments/apartment6.jpeg";
import apartment7 from "./apartments/apartment7.jpeg";
import apartment8 from "./apartments/apartment8.jpeg";
import apartment9 from "./apartments/apartment9.jpeg";
import apartment10 from "./apartments/apartment10.jpeg";
import apartment11 from "./apartments/apartment11.jpeg";
import apartment12 from "./apartments/apartment12.jpeg";

import apartments1 from "./Apartments1/apartments1.jpeg";
import apartments2 from "./Apartments1/apartments2.jpeg";
import apartments3 from "./Apartments1/apartments3.jpeg";
import apartments4 from "./Apartments1/apartments4.jpeg";
import apartments5 from "./Apartments1/apartment-5.jpeg";
import apartments6 from "./Apartments1/apartment-6.jpeg";
import apartments7 from "./Apartments1/apartment-7.jpeg";
import apartments8 from "./Apartments1/apartment-8.jpeg";
import apartments9 from "./Apartments1/apartment-9.jpeg";
import apartments10 from "./Apartments1/apartment-10.jpeg";



import cottage1 from "./cottage/cottage1.jpeg";
import cottage2 from "./cottage/cottage2.jpeg";
import cottage3 from "./cottage/cottage3.jpeg";
import cottage4 from "./cottage/cottage4.jpeg";
import cottage5 from "./cottage/cottage5.jpeg";
import cottage6 from "./cottage/cottage6.jpeg";

import house1 from "./house/house1.jpeg";
import house2 from "./house/house2.jpeg";
import house3 from "./house/house3.jpeg";
import house4 from "./house/house4.jpeg";
import house5 from "./house/house5.jpeg";
import house6 from "./house/house6.jpeg";

import One from "./One.js";
import twoBedAp from './properties/2bedap.jpg';
import fourBedHouse from './properties/4BedHouse.jpeg';
import sixBedHouse from './properties/6BedHouse.jpeg';

import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Image, Segment } from 'semantic-ui-react'
import logoHere from "./logoHere.png";


import topListingComponent from "./topListingComponent.js";

class App extends Component {
constructor(props) {
    super(props);
    this.state = {text: '', inputText: '', mode:'edit'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleSave() {
    this.setState({text: this.state.inputText, mode: 'view'});
    console.log(this.state.inputText)
  }



  handleEdit() {
    this.setState({mode: 'edit'});
  }
  renderInputField() {
    if(this.state.mode === 'view') {
      return <div></div>;
    } else {
      return (
          <p>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          </p>
      );
    }
  }

  render () {


    var variable = "";
    variable= this.state.text

    if(this.state.mode === 'view') {
      if(variable[0] === "H"){
        return(
          <div>

                  <div>
                    <div class="ui massive menu">
                      <div class="item">
                        <img src={logoHere} />
                        <p> CompanyName</p>
                      </div>
                      <a class="active item">
                        Buy
                      </a>
                      <a class="item">
                        Sell
                      </a>
                      <a class="item">
                        Rent
                      </a>
                      <a class="item">
                        Mortgage
                      </a>
                      <div class="right menu">
                        <div class="ui dropdown item">
                          Language <i class="dropdown icon"></i>
                          <div class="menu">
                            <a class="item">English</a>
                            <a class="item">French</a>
                            <a class="item">Russian</a>
                            <a class="item">Spanish</a>
                          </div>
                        </div>
                        <div class="item">
                          <div class="ui primary button">Log In</div>
                        </div>
                        <div class="item">
                          <div class="ui primary button">Sign Up</div>
                        </div>
                      </div>
                    </div>

                    <div class="ui relaxed container grid">
                      <div class="one column row">
                        <div class="column">

                          <header className="header">
                            <h2>Top listings</h2>
                          </header>
                        </div>
                      </div>
                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                            </div>
                            <div class="meta">
                              <a>$700,000</a>
                            </div>
                            <div class="description">
                              4 Bedroom 2 Bathroom 3,000 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                              50 Alexander Crossing, Ajax
                            </span>

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <span class="date">$630,000</span>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,400 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          Eagle Rock Road, Vaughan
                          </span>

                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$599,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          2161 Yonge Street, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>



                      <div class="three column row">
                        <div class="one wide column">
                          <button class ="ui animated blue big icon button">
                            <div class="visible content">
                              <i class="microphone icon"></i>
                            </div>
                            <div class = "hidden content">
                              <i class = "pause icon"></i>
                            </div>
                          </button>
                        </div>
                        <div class="twelve wide column">
                          <div class="ui fluid big blue icon input">
                            <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                            <i class="inverted circular search link icon">
                            </i>
                          </div>
                        </div>
                        <div class="three wide column">
                          <button class="ui animated big blue button" onClick={this.handleSave}>
                            <div class="visible content">
                              Search
                            </div>
                            <div class="hidden content">
                              <i class = "search icon"></i>
                            </div>
                          </button>

                        </div>
          </div>
                        <div class="one column row">
                          <div class="column">
                            <h2>Your search: {this.state.text}</h2>
                            <h2>Top properties based on your search: </h2>

                          </div>
                        </div>

                        <div class="three column row">
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                              <div class="ui blue ribbon label">
                                From MLSListings
                              </div>
                              <img src={house1} />
                            </div>
                            <div class="content">
                              <div class="header">
                                House
                              </div>
                              <div class="meta">
                                <a>$1,499,000</a>
                              </div>
                              <div class="description">
                                5 Bedroom 3 Bathroom 3,900 sq ft
                              </div>
                            </div>
                            <div class="extra content">
                            <a>
                            <i class="hospital icon"></i>
                            less than 5 km away
                          </a>
                              <span class="right floated">
                                10 Eastview Cres, Toronto
                              </span>

                            </div>
                          </div>
                          </div>
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                            <img src={house3} />
                            </div>
                            <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                              <a>$2,199,000</a>
                            </div>
                            <div class="description">
                              5 Bedroom 4 Bathroom 4,200 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                              58 Golfdale Rd, Toronto
                            </span>

                          </div>
                        </div>

                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                            <img src={house5} />
                          </div>
                          <div class="content">
                            <div class="header">
                            House
                            </div>
                            <div class="meta">
                              <a>$1,599,000</a>
                            </div>
                            <div class="description">
                              6 Bedroom 4 Bathroom 4,500 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                              28 Roslin Ave, Toronto
                            </span>

                          </div>
                        </div>

                          </div>
                        </div>



                        <div class="three column row">
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                            <div class="ui blue ribbon label">
                                From Home Owner
                              </div>
                              <img src={house6} />
                            </div>
                            <div class="content">
                              <div class="header">
                                House
                              </div>
                              <div class="meta">
                                <a>$1,399,000</a>
                              </div>
                              <div class="description">
                                5 Bedroom 3 Bathroom 3,400 sq ft
                              </div>
                            </div>
                            <div class="extra content">
                              <span class="right floated">
                                104 Mount Pleasant Rd, Toronto
                              </span>

                            </div>
                          </div>
                          </div>
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                            <img src={house4} />
                            </div>
                            <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                              <span class="date">$999,000</span>
                            </div>
                            <div class="description">
                              5 Bedroom 2 Bathroom 3,800 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                              10 Oaken Ftwy, Toronto
                            </span>

                          </div>
                        </div>

                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                            From Kijiji
                          </div>
                            <img src={house2} />
                          </div>
                          <div class="content">
                            <div class="header">
                              House
                            </div>
                            <div class="meta">
                              <a>$899,000</a>
                            </div>
                            <div class="description">
                              4 Bedroom 2 Bathroom 3,100 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                              308 Fenn Ave, Toronto
                            </span>

                          </div>
                        </div>

                          </div>
                        </div>







                      </div>
                    </div>


          </div>
        );
      }else if(variable[0] === "C"){
          return(
            <div>


            <div>

                    <div>
                      <div class="ui massive menu">
                        <div class="item">
                          <img src={logoHere} />
                          <p> CompanyName</p>
                        </div>
                        <a class="active item">
                          Buy
                        </a>
                        <a class="item">
                          Sell
                        </a>
                        <a class="item">
                          Rent
                        </a>
                        <a class="item">
                          Mortgage
                        </a>
                        <div class="right menu">
                          <div class="ui dropdown item">
                            Language <i class="dropdown icon"></i>
                            <div class="menu">
                              <a class="item">English</a>
                              <a class="item">French</a>
                              <a class="item">Russian</a>
                              <a class="item">Spanish</a>
                            </div>
                          </div>
                          <div class="item">
                            <div class="ui primary button">Log In</div>
                          </div>
                          <div class="item">
                            <div class="ui primary button">Sign Up</div>
                          </div>
                        </div>
                      </div>

                      <div class="ui relaxed container grid">
                        <div class="one column row">
                          <div class="column">

                            <header className="header">
                              <h2>Top listings</h2>
                            </header>
                          </div>
                        </div>                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                            </div>
                            <div class="meta">
                              <a>$700,000</a>
                            </div>
                            <div class="description">
                              4 Bedroom 2 Bathroom 3,000 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          
                            <span class="right floated">
                              50 Alexander Crossing, Ajax
                            </span>

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <span class="date">$630,000</span>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,400 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          Eagle Rock Road, Vaughan
                          </span>

                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$599,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          2161 Yonge Street, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>


                        <div class="three column row">
                          <div class="one wide column">
                            <button class ="ui animated blue big icon button">
                              <div class="visible content">
                               <i class="microphone icon"></i>
                              </div>
                              <div class = "hidden content">
                               <i class = "pause icon"></i>
                              </div>
                            </button>
                          </div>
                          <div class="twelve wide column">
                            <div class="ui fluid big blue icon input">
                              <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                              <i class="inverted circular search link icon">
                              </i>
                            </div>
                          </div>
                          <div class="three wide column">
                            <button class="ui animated big blue button" onClick={this.handleSave}>
                              <div class="visible content">
                                Search
                              </div>
                              <div class="hidden content">
                                <i class = "search icon"></i>
                              </div>
                            </button>

                          </div>
            </div>
                          <div class="one column row">
                            <div class="column">
                              <h2>Your search: {this.state.text}</h2>
                              <h2>Top properties based on your search: </h2>

                            </div>
                          </div>

                          <div class="three column row">
                            <div class="column">

                            <div class="ui link card">
                              <div class="image">
                                <img src={cottage1} />
                              </div>
                              <div class="content">
                                <div class="header">
                                  Cottage
                                </div>
                                <div class="meta">
                                  <a>$999,000</a>
                                </div>
                                <div class="description">
                                  5 Bedroom 3 Bathroom 3,900 sq ft
                                </div>
                              </div>
                              <div class="extra content">
                              <a>
                            <i class="hospital icon"></i>
                            less than 10 km away
                          </a>
                                <span class="right floated">
                                  10 Raven Lake Road, Muskoka
                                </span>

                              </div>
                            </div>
                            </div>
                            <div class="column">

                            <div class="ui link card">
                              <div class="image">
                              <div class="ui blue ribbon label">
                            From Realtor.ca
                          </div>
                              <img src={cottage2} />
                              </div>
                              <div class="content">
                              <div class="header">
                                Cottage
                              </div>
                              <div class="meta">
                                <a>$1,199,000</a>
                              </div>
                              <div class="description">
                                5 Bedroom 4 Bathroom 4,200 sq ft
                              </div>
                            </div>
                            <div class="extra content">
                              <span class="right floated">
                                1041 Lake Joseph Road, Muskoka
                              </span>

                            </div>
                          </div>

                          </div>
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                              <img src={cottage3} />
                            </div>
                            <div class="content">
                              <div class="header">
                              Cottage
                              </div>
                              <div class="meta">
                                <a>$999,000</a>
                              </div>
                              <div class="description">
                                6 Bedroom 4 Bathroom 4,500 sq ft
                              </div>
                            </div>
                            <div class="extra content">
                              <span class="right floated">
                                1087 Lake Muskoka Road, Muskoka
                              </span>

                            </div>
                          </div>

                            </div>
                          </div>



                          <div class="three column row">
                            <div class="column">

                            <div class="ui link card">
                              <div class="image">
                              <div class="ui blue ribbon label">
                            From Kijiji
                          </div>
                                <img src={cottage4} />
                              </div>
                              <div class="content">
                                <div class="header">
                                  Cottage
                                </div>
                                <div class="meta">
                                  <a>$899,000</a>
                                </div>
                                <div class="description">
                                  5 Bedroom 3 Bathroom 3,400 sq ft
                                </div>
                              </div>
                              <div class="extra content">
                                <span class="right floated">
                                  145 Sugarbush Hill Road, Muskoka
                                </span>

                              </div>
                            </div>
                            </div>
                            <div class="column">

                            <div class="ui link card">
                              <div class="image">
                              <img src={cottage5} />
                              </div>
                              <div class="content">
                              <div class="header">
                                Cottage
                              </div>
                              <div class="meta">
                                <span class="date">$699,000</span>
                              </div>
                              <div class="description">
                                4 Bedroom 2 Bathroom 3,200 sq ft
                              </div>
                            </div>
                            <div class="extra content">
                              <span class="right floated">
                                58 Murden Road, Muskoka
                              </span>

                            </div>
                          </div>

                          </div>
                          <div class="column">

                          <div class="ui link card">
                            <div class="image">
                              <img src={cottage6} />
                            </div>
                            <div class="content">
                              <div class="header">
                                Cottage
                              </div>
                              <div class="meta">
                                <a>$699,000</a>
                              </div>
                              <div class="description">
                                4 Bedroom 2 Bathroom 3,100 sq ft
                              </div>
                            </div>
                            <div class="extra content">
                            <a>
                            <i class="hospital icon"></i>
                            less than 10 km away
                          </a>
                              <span class="right floated">
                                1091 Main Street, Dorset
                              </span>

                            </div>
                          </div>
                            </div>
                          </div>
                        </div>
                      </div>


            </div>


            </div>
          );
      }else if(variable[0] === "A"){
        return(
          <div>

<div>

<div>
  <div class="ui massive menu">
    <div class="item">
      <img src={logoHere} />
      <p> CompanyName</p>
    </div>
    <a class="active item">
      Buy
    </a>
    <a class="item">
      Sell
    </a>
    <a class="item">
      Rent
    </a>
    <a class="item">
      Mortgage
    </a>
    <div class="right menu">
      <div class="ui dropdown item">
        Language <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item">English</a>
          <a class="item">French</a>
          <a class="item">Russian</a>
          <a class="item">Spanish</a>
        </div>
      </div>
      <div class="item">
        <div class="ui primary button">Log In</div>
      </div>
      <div class="item">
        <div class="ui primary button">Sign Up</div>
      </div>
    </div>
  </div>

  <div class="ui relaxed container grid">
    <div class="one column row">
      <div class="column">

        <header className="header">
          <h2>Top listings</h2>
        </header>
      </div>
    </div>                      <div class="three column row">
        <div class="column">

        <div class="ui link card">
        <div class="ui fluid image">
          <div class="ui red ribbon label">
            Top Pick
          </div>
          <img src={topListingOne} />

        </div>
          <div class="content">
            <div class="header">
              House for Sale
            </div>
            <div class="meta">
              <a>$700,000</a>
            </div>
            <div class="description">
              4 Bedroom 2 Bathroom 3,000 sq ft
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              50 Alexander Crossing, Ajax
            </span>

          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
        <div class="ui fluid image">
          <div class="ui red ribbon label">
            Top Pick
          </div>
          <img src={topListingTwo} />

        </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <span class="date">$630,000</span>
          </div>
          <div class="description">
            2 Bedroom 2 Bathroom 1,400 sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
          <span class="right floated">
          Eagle Rock Road, Vaughan
          </span>

        </div>
      </div>

      </div>
      <div class="column">

      <div class="ui link card">
      <div class="ui fluid image">
        <div class="ui red ribbon label">
          Top Pick
        </div>
        <img src={topListingThree} />

      </div>
        <div class="content">
          <div class="header">
          Condo/Townhome
          </div>
          <div class="meta">
            <a>$599,000</a>
          </div>
          <div class="description">
            2 Bedroom 2 Bathroom 1,200 sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
          2161 Yonge Street, Toronto
          </span>

        </div>
      </div>

        </div>
      </div>



    <div class="three column row">
      <div class="one wide column">
        <button class ="ui animated blue big icon button">
              <div class="visible content">
               <i class="microphone icon"></i>
              </div>
              <div class = "hidden content">
               <i class = "pause icon"></i>
              </div>
        </button>
      </div>
      <div class="twelve wide column">
        <div class="ui fluid big blue icon input">
          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
          <i class="inverted circular search link icon">
          </i>
        </div>
      </div>
      <div class="three wide column">
        <button class="ui animated big blue button" onClick={this.handleSave}>
          <div class="visible content">
            Search
          </div>
          <div class="hidden content">
            <i class = "search icon"></i>
          </div>
        </button>

      </div>
</div>
      <div class="one column row">
        <div class="column">
          <h2>Your search: {this.state.text}</h2>
          <h2>Top properties based on your search: </h2>

        </div>
      </div>

      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">

            <img src={apartments1} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a>$499,000</a>
            </div>
            <div class="description">
              3 Bedroom 2 Bathroom 1,400 sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
              5576 Yonge St, Toronto
            </span>

          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui blue ribbon label">
            From MLSListings
          </div>
          <img src={apartments2} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <a>$449,000</a>
          </div>
          <div class="description">
            2 Bedroom 2 Bathroom 1,200 sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            228 Steeles Ave W, Toronto
          </span>

        </div>
      </div>

      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">

          <img src={apartments10} />
        </div>
        <div class="content">
          <div class="header">
          Condo/Townhome
          </div>
          <div class="meta">
            <a>$599,000</a>
          </div>
          <div class="description">
            3 Bedroom 2 Bathroom 1,800 sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
            70 Drewry Ave, Toronto
          </span>

        </div>
      </div>

        </div>
      </div>



      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui blue ribbon label">
                                From Home Owner
                              </div>
            <img src={apartments4} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a>$499,000</a>
            </div>
            <div class="description">
              3 Bedroom 2 Bathroom 1,300 sq ft
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              15 Ancona St, Toronto
            </span>

          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <img src={apartments5} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <span class="date">$449,000</span>
          </div>
          <div class="description">
            3 Bedroom 2 Bathroom 1,800 sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
            70 Finch Ave E, Toronto
          </span>

        </div>
      </div>

      </div>
      <div class="column">

      <div class="ui link card">
        <div class="image">
        <div class="ui blue ribbon label">
            From Realtor.ca
          </div>
          <img src={apartments6} />
        </div>
        <div class="content">
          <div class="header">
          Condo/Townhome
          </div>
          <div class="meta">
            <a>$599,000</a>
          </div>
          <div class="description">
            2 Bedroom 2 Bathroom 1,700 sq ft
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            1200 Steeles Ave E, Toronto
          </span>

        </div>
      </div>

        </div>
      </div>


      <div class="three column row">
        <div class="column">

        <div class="ui link card">
          <div class="image">
            <img src={apartments7} />
          </div>
          <div class="content">
            <div class="header">
              Condo/Townhome
            </div>
            <div class="meta">
              <a>$499,000</a>
            </div>
            <div class="description">
              2 Bedroom 2 Bathroom 1,500 sq ft
            </div>
          </div>
          <div class="extra content">
          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
            <span class="right floated">
              5625 Yonge St, Toronto
            </span>

          </div>
        </div>
        </div>
        <div class="column">

        <div class="ui link card">
          <div class="image">
          <div class="ui blue ribbon label">
            From Realtor.ca
          </div>
          <img src={apartments8} />
          </div>
          <div class="content">
          <div class="header">
            Condo/Townhome
          </div>
          <div class="meta">
            <span class="date">$399,000</span>
          </div>
          <div class="description">
            2 Bedroom 2 Bathroom 1,200 sq ft
          </div>
        </div>
        <div class="extra content">
        <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
          <span class="right floated">
            13 Byng Ave, Toronto
          </span>

        </div>
      </div>

      </div>
     

       
      </div>




    </div>
  </div>


</div>


          </div>
        );

      }else{
      return (
        <div>
        <div>

                <div>
                  <div class="ui massive menu">
                    <div class="item">
                      <img src={logoHere} />
                      <p> CompanyName</p>
                    </div>
                    <a class="active item">
                      Buy
                    </a>
                    <a class="item">
                      Sell
                    </a>
                    <a class="item">
                      Rent
                    </a>
                    <a class="item">
                      Mortgage
                    </a>
                    <div class="right menu">
                      <div class="ui dropdown item">
                        Language <i class="dropdown icon"></i>
                        <div class="menu">
                          <a class="item">English</a>
                          <a class="item">French</a>
                          <a class="item">Russian</a>
                          <a class="item">Spanish</a>
                        </div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Log In</div>
                      </div>
                      <div class="item">
                        <div class="ui primary button">Sign Up</div>
                      </div>
                    </div>
                  </div>

                  <div class="ui relaxed container grid">
                    <div class="one column row">
                      <div class="column">

                        <header className="header">
                          <h2>Top listings</h2>
                        </header>
                      </div>
                    </div>                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                            </div>
                            <div class="meta">
                              <a>$700,000</a>
                            </div>
                            <div class="description">
                              4 Bedroom 2 Bathroom 3,000 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                              50 Alexander Crossing, Ajax
                            </span>

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <span class="date">$630,000</span>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,400 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          Eagle Rock Road, Vaughan
                          </span>

                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$599,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
 
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          2161 Yonge Street, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>



                    <div class="three column row">
                      <div class="one wide column">
                        <button class ="ui animated blue big icon button">
                              <div class="visible content">
                               <i class="microphone icon"></i>
                              </div>
                              <div class = "hidden content">
                               <i class = "pause icon"></i>
                              </div>
                        </button>
                      </div>
                      <div class="twelve wide column">
                        <div class="ui fluid big blue icon input">
                          <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                          <i class="inverted circular search link icon">
                          </i>
                        </div>
                      </div>
                      <div class="three wide column">
                        <button class="ui animated big blue button" onClick={this.handleSave}>
                          <div class="visible content">
                            Search
                          </div>
                          <div class="hidden content">
                            <i class = "search icon"></i>
                          </div>
                        </button>

                      </div>
        </div>
                      <div class="one column row">
                        <div class="column">
                          <h2>Your search: {this.state.text}</h2>
                          <h2>Top properties based on your search: </h2>

                        </div>
                      </div>

                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                            From MLSListings
                          </div>
                            <img src={apartment11} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Condo/Townhome
                            </div>
                            <div class="meta">
                              <a>$499,000</a>
                            </div>
                            <div class="description">
                              3 Bedroom 2 Bathroom 1,400 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="hospital icon"></i>
                            less than 5 km away
                          </a>
                            <span class="right floated">
                              140 Bloor St E, Toronto
                            </span>

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <img src={apartment5} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$449,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            170 Bloor St E, Toronto
                          </span>

                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                        <div class="ui blue ribbon label">
                            From Kijiji
                          </div>
                          <img src={apartment3} />
                        </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$599,000</a>
                          </div>
                          <div class="description">
                            3 Bedroom 2 Bathroom 1,800 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            250 Cumberland St, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>



                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                            <img src={apartment4} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Condo/Townhome
                            </div>
                            <div class="meta">
                              <a>$499,000</a>
                            </div>
                            <div class="description">
                              3 Bedroom 2 Bathroom 1,300 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                              7 Charles St W, Toronto
                            </span>

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <img src={apartment3} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <span class="date">$799,000</span>
                          </div>
                          <div class="description">
                            3 Bedroom 2 Bathroom 1,800 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            155 Yorkville Ave, Toronto
                          </span>

                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={apartment6} />
                        </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$599,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,700 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            825 Church St, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>


                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                                From Home Owner
                              </div>
                            <img src={apartment7} />
                          </div>
                          <div class="content">
                            <div class="header">
                              Condo/Townhome
                            </div>
                            <div class="meta">
                              <a>$499,000</a>
                            </div>
                            <div class="description">
                              2 Bedroom 2 Bathroom 1,500 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                            <span class="right floated">
                              920 Yonge Street, Toronto
                            </span>

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                          <div class="image">
                          <div class="ui blue ribbon label">
                            From Realtor.ca
                          </div>
                          <img src={apartment2} />
                          </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <span class="date">$399,000</span>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            410 Bloor St W, Toronto
                          </span>

                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                        <div class="image">
                          <img src={apartment1} />
                        </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$399,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <span class="right floated">
                            495 Huron St, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>




                    </div>
                  </div>


        </div>


        </div>
      );
      }
    } else {
      return (
      <div>
       
        <div class="ui massive menu">
          <div class="item">
            <img src={logoHere} />
            <p> CompanyName</p>
          </div>
          <a class="active item">
          Buy
          </a>
          <a class="item">
          Sell
          </a>
          <a class="item">
          Rent
          </a>
          <a class="item">
          Mortgage
          </a>
          <div class="right menu">
            <div class="ui dropdown item">
              Language <i class="dropdown icon"></i>
              <div class="menu">
                <a class="item">English</a>
                <a class="item">French</a>
                <a class="item">Russian</a>
                <a class="item">Spanish</a>
              </div>
            </div>
            <div class="item">
              <div class="ui primary button">Log In</div>
            </div>
            <div class="item">
              <div class="ui primary button">Sign Up</div>
            </div>
          </div>
        </div>
        
        <div class="ui white relaxed container grid">
          <div class="one column row">
            <div class="column">

              <header className="header">
                <h2>Top listings</h2>
              </header>
            </div>
          </div>                      <div class="three column row">
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingOne} />

                        </div>
                          <div class="content">
                            <div class="header">
                              House for Sale
                            </div>
                            <div class="meta">
                              <a>$700,000</a>
                            </div>
                            <div class="description">
                              4 Bedroom 2 Bathroom 3,000 sq ft
                            </div>
                          </div>
                          <div class="extra content">
                            <span class="right floated">
                              50 Alexander Crossing, Ajax
                            </span>

                          </div>
                        </div>
                        </div>
                        <div class="column">

                        <div class="ui link card">
                        <div class="ui fluid image">
                          <div class="ui red ribbon label">
                            Top Pick
                          </div>
                          <img src={topListingTwo} />

                        </div>
                          <div class="content">
                          <div class="header">
                            Condo/Townhome
                          </div>
                          <div class="meta">
                            <span class="date">$630,000</span>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,400 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                        <a>
                            <i class="h square icon"></i>
                            less than 5 km away
                          </a>
                          <span class="right floated">
                          Eagle Rock Road, Vaughan
                          </span>

                        </div>
                      </div>

                      </div>
                      <div class="column">

                      <div class="ui link card">
                      <div class="ui fluid image">
                        <div class="ui red ribbon label">
                          Top Pick
                        </div>
                        <img src={topListingThree} />

                      </div>
                        <div class="content">
                          <div class="header">
                          Condo/Townhome
                          </div>
                          <div class="meta">
                            <a>$599,000</a>
                          </div>
                          <div class="description">
                            2 Bedroom 2 Bathroom 1,200 sq ft
                          </div>
                        </div>
                        <div class="extra content">
                          <a>
                            <i class="subway icon"></i>
                            less than 2 km away
                          </a>
                          <span class="right floated">
                          2161 Yonge Street, Toronto
                          </span>

                        </div>
                      </div>

                        </div>
                      </div>

          <div class="white one column row">
            <div class="column">
              <h2>Search: {this.state.text}</h2>

            </div>
          </div>

          <div class="white three column row">
            <div class="one wide column">
            <button class ="ui animated blue big icon button">
                              <div class="visible content">
                               <i class="microphone icon"></i>
                              </div>
                              <div class = "hidden content">
                               <i class = "pause icon"></i>
                              </div>
                            </button>
            </div>
            <div class="twelve wide column">
              <div class="ui fluid big blue icon input">
                <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.inputText} />
                <i class="inverted circular search link icon">
                </i>
              </div>
            </div>
            <div class="three wide column">
              <button class="ui animated big blue button" onClick={this.handleSave}>
                <div class="visible content">
                  Search
                </div>
                <div class="hidden content">
                  <i class = "search icon"></i>
                </div>
              </button>

            </div>
          </div>



          </div>
        </div>
     
      );
    }
  }
}
export default App;
