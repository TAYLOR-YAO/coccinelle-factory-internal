import React, {Component} from "react";
import axios from "axios";
import {Grid, Cell} from "react-mdl";
import { Accordion, Card, Button } from 'react-bootstrap';
import EdiText from 'react-editext';
import "./Acceuil.css";

class Acceuil extends Component {
    state={
        mainDeuvre:"",
        prixDeTissu:"",
        nomDeTissu:" ",
        prixTotal:" ",
        imageDuTissu:" ",
        epaules:" ",
        bras:" ",
        poignet:" ",
        lgBras:" ",
        lgVeste:" ",
        poitrine:" ",
        ventre:" ",
        ceinture:" ",
        dos:" ",
        hanche:" ",
        entrejambe:" ",
        mollet:" ", 
        chevilles:" ",
        cuisse:" ",
        genou:" ",
        lgJambe:" ",
        nomDuClient:" ",
        cel:" ",
        email:" ",
        addess:" ",
        consignes:"Ajouter Consigne? ",
        commmandes:[],
        dateDeLivraison:"",
        date: new Date()
    }

    componentDidMount(){
        
        axios
        .get("/api/commmander")
        .then(res => 
            this.setState({
                commmandes: res.data.sort(function(a,b){
                    return new Date(a.dateDeLivraison) - new Date(b.dateDeLivraison);
                })

            })
        ) 
        .catch(err =>
          console.log("Cached ERROR...")
        );
    }

    onSaveDateDeLivraison = val => {this.setState({dateDeLivraison: val})}

    render(){
        const commmandes = this.state.commmandes
        return(
        <div style={{width:"90%",margin:"auto"}}>
            <h1>Acceuil</h1>

            {
                commmandes.map(commmande=>{
                    return (<div className="alivrer" key={commmande._id}>
                        <Grid >
                            <Cell col={10}>
                                <Grid >
                                    <Cell col={3}><h4>{commmande.nomDuClient}</h4></Cell>
                                    <Cell col={3}><h5>{commmande.cel}</h5></Cell>
                                    <Cell col={3}>{commmande.email}</Cell>
                                    <Cell col={3}>{commmande.nomDeTissu}</Cell>
                                </Grid>
                                
                            </Cell>
                            <Cell col={2}>
                                <strong>Date de Livraison</strong>
                                <br/>
                                <span >
                                    <EdiText
                                        type='text'
                                        value={commmande.dateDeLivraison.substring(0, commmande.dateDeLivraison.length - 14)}
                                        dateFormat="dd/MM/yyyy" 
                                        onSave={this.onSaveDateDeLivraison}
                                    />
                                </span>
                                <button style={{borderRadius:"5px"}}>Livrer</button>
                            </Cell>
                        </Grid>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Voir les details
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body style={{color:"#333"}}>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>

                )})
            }      
        </div>
        )
    }
}

export default Acceuil;