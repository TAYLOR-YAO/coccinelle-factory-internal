import React, {Component} from 'react';
import './App.css';

import logo from "./Components/Images/Logos/cofa4.jpg";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "./Components/Utils/authActions";
import LogUserOut from "./Components/LogUserOut/LogUserOut";
import SideDrawerLogUserOut from "./Components/LogUserOut/SideDrawerLogUserOut";
import Router from "./Components/Router/Router";
import {Layout,Header, Navigation, Content, Drawer,Footer,FooterSection,FooterLinkList} from "react-mdl";
import {Link} from "react-router-dom";

class App extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    console.log("Clicked !!")
    // this.props.logoutUser();
  };
  render(){
  return (
        <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link to="/" style={{textDecoration:"none", color:"#000"}}> <img src={logo} alt="coccinelle factory"/></Link>} scroll>

            <Navigation>
              <Link to="/">Acceuil</Link>
              <Link to="/commande">Commande</Link>
              <Link to="/inventaire">Inventaire</Link>
              <Link to="/collections">Collections</Link>
              <Link to="/contact">Contact</Link>
              <LogUserOut/>   
        
            </Navigation>
          </Header>
          <Drawer title={<Link to="/" style={{textDecoration:"none", color:"#000"}}>Foccinelle Factory</Link>}>
            <Navigation>
              <Link to="/">Acceuil</Link>
              <Link to="/commande">Commande</Link>
              <Link to="/inventaire">Inventaire</Link>
              <Link to="/collections">Collections</Link>
              <Link to="/contact">Contact</Link>
              <SideDrawerLogUserOut/>                                                          
            </Navigation>
          </Drawer>
          <Content >
            {/* <Main/> */}

{/* *************************************************************** */}
            <div className="heading">
              <h1>Foccinelle Factory</h1>
            </div>
              
            <Router/>
{/* *************************************************************** */}
  
        </Content>
        <div style={{marginBottom:"30px"}}></div>
        <Footer size="mini">
          <FooterSection type="left" logo="Title">
              <FooterLinkList>
                  <a href="/">Help</a>
                  <a href="/">Privacy & Terms</a>
              </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
  }
}

App.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(App);

