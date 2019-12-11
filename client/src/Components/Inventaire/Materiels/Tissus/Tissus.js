import React, {Component} from "react";
import {Grid, Cell, Button,Textfield} from "react-mdl";

class Tissus extends Component {
    state={
        nomDeTissu:"Nom du tissu",
        code:"",
        mesure:"",
        couleur:"",
        imageDuTissu:"https://www.planetetissus.fr/Files/113061/Img/22/POLY-LAINE-11-GDE.jpg",
        details:"",
        genre:""
    }

    render(){
        return(
            <div >
                <div style={{width:"100%",margin:"auto", textAlign:'center'}}>
                    <h1>Inventaire De Tissus</h1>
                    <hr/>
                </div>

                <Grid>
                    <Cell col={5}>
                        <div style={{textAlign:'center'}}>
                            Resume
                        </div>
                    </Cell>
                    <Cell col={7} style={{borderLeft:"5px double #000"}}>
                        <div style={{textAlign:'center'}}>
                            Inserssion
                        </div>
                        <Grid>
                            <Cell col={4}>
                                <input type="file" />
                            </Cell>
                            <Cell col={4}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Nom du Tissu"
                                    style={{width: '200px'}}
                                />
                            </Cell>
                            <Cell col={4}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Code du Tissu"
                                    style={{width: '200px'}}
                                />
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Prix"
                                    style={{width: '200px'}}
                                />
                            </Cell>
                            <Cell col={4}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Couleur du Tissu"
                                    style={{width: '200px'}}
                                />
                            </Cell>
                            <Cell col={4}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Genre"
                                    style={{width: '200px'}}
                                />
                            </Cell>
                            
                        </Grid>
                        <Grid>
                        <Cell col={8}>
                                <Textfield
                                    onChange={() => {}}
                                    label="Details"
                                    style={{width: '90%'}}
                                />
                            </Cell>
                            <Cell col={4}>
                                <Button raised style={{background:"#FF0000"}}>Button</Button>
                            </Cell>
                        </Grid>

                        

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Tissus;