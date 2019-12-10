import React, {Component} from "react";
import Carousel from "./Carousel";
import {Grid,Cell} from "react-mdl";
import "./Collections.css";

class Collections extends Component {

  render() {
    return (
      <div className="collection">
        <Grid className="demo-grid-3">
          <Cell col={3} >
            <h1>Control Pannel</h1>
          </Cell>
          <Cell col={9} >
            <Carousel/>
          </Cell>
          
        </Grid>
      </div>
    );
  }

}


export default Collections;