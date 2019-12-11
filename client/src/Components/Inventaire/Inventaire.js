import React, {Component} from "react";
import {Grid, Cell, Tabs, Tab} from "react-mdl";
import Tissus from "./Materiels/Tissus";
class Inventaire extends Component {
    state={
        activeTab : 0
    }


    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(<div>
                    <Tissus/>
                </div>
            )

        }else if (this.state.activeTab === 1) {
            return(
                <div>
                   Tab 2
                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return(<div>
                    Tab 3
                </div>
            )
        }
    }
  
    render(){
        return(
            <div>
                {/* <div style={{width:"100%",margin:"auto"}}>
                    <h1>Inventaire</h1>
                
                </div> */}
                <div className="category-tabs">
                    <Tabs activeTab = {this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                        <Tab style={{color:"#000" }}>Tissus</Tab>
                        <Tab style={{color:"#000" }}>Accessoires</Tab>
                        <Tab style={{color:"#000" }}>Autres Materiels</Tab>                                                  
                    </Tabs>
                    <section>
                        <Grid className="project-grid">
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                    </section>
                </div>
            </div>
        )
    }
}

export default Inventaire;