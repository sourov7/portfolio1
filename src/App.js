import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link ,NavLink} from "react-router-dom";
// import Particles from 'react-particles-js';

class App extends Component {
  render() {

    // let particleOptions = {
    //     particles:{
    //       number : {
    //         value:100,
    //         density:{
    //           enable:"true",
    //           value_area:800
    //         }
    //       }
    //     },
    //     line_linked: {
    //           enable: true,
    //           distance: 300,
    //           color: "black",
    //           opacity: 0.4,
    //           width: 2
    //         },
    // }
    return (
    <div className= "particlebg1">
         
        <div className="demo-big-content robotoFont font-weight ">
        
            <Layout>
                <Header className="headerColor headerNavColor stickynab" title="sourov" scroll>
                    <Navigation className=" headerNavColor ">
                        <NavLink className="headerNavColor"style= {{color:""}} to ="/"> Home </NavLink>
                        <NavLink className=" headerNavColor" to ="/projects"> Projects </NavLink>
                        <NavLink className=" headerNavColor" to ="/Resume"> Resume </NavLink>
                        {/* <NavLink className=" headerNavColor" to ="/aboutme"> Aboutme </NavLink> */}
                        <NavLink className=" headerNavColor" to ="/contact"> Contact </NavLink>
                    </Navigation>
                </Header>
                <Drawer title="Sourov">
                    <Navigation className=" headerNavColor">
                        <NavLink className="headerNavColor"style= {{color:"black"}} to ="/">                LandingPage </NavLink>
                        <NavLink className=" headerNavColor" to ="/projects"> Projects </NavLink>
                        <NavLink className=" headerNavColor" to ="/Resume"> Resume </NavLink>
                        <NavLink className=" headerNavColor" to ="/aboutme"> Aboutme </NavLink>
                        <NavLink className=" headerNavColor" to ="/contact"> Contact </NavLink>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    {/* <Particles className = "particleclass" params = {particleOptions} /> */}
                    <Main className= "psitionrelatice"/>
                    
                </Content>
            </Layout>
     </div>
</div> 
    );
  }
}

export default App;
