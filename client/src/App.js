import React, {Component} from 'react';
import './App.css';

import logo from "./Components/Images/Logos/cofa4.jpg";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "./Components/Utils/authActions";
import LogUserOut from "./Components/LogUserOut/LogUserOut";
import SideDrawerLogUserOut from "./Components/LogUserOut/SideDrawerLogUserOut";
import Router from "./Components/Router/Router";
import {Layout,Header, Navigation, Content, Drawer, FooterDropDownSection,Footer,FooterSection,FooterLinkList} from "react-mdl";
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
        <Footer size="mega">
          <FooterSection type="middle">
            <FooterDropDownSection title="Features">
                <FooterLinkList>
                    <a href="/">About</a>
                    <a href="/">Terms</a>
                    <a href="/">Partners</a>
                    <a href="/">Updates</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Details">
                <FooterLinkList>
                    <a href="/">Specs</a>
                    <a href="/">Tools</a>
                    <a href="/">Resources</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Technology">
                <FooterLinkList>
                    <a href="/">How it works</a>
                    <a href="/">Patterns</a>
                    <a href="/">Usage</a>
                    <a href="/">Products</a>
                    <a href="/">Contracts</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="FAQ">
                <FooterLinkList>
                    <a href="/">Questions</a>
                    <a href="/">Answers</a>
                    <a href="/">Contact Us</a>
                </FooterLinkList>
            </FooterDropDownSection>
        </FooterSection>
        <FooterSection type="bottom" logo="Tayment">
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

