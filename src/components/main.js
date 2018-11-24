import React from 'react';
import Home from './landingPage.js';
import About from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Project from './projects';
import {BrowserRouter,Switch, Route } from  'react-router-dom';


const Main = () =>{
    return(

        <Switch> 
            <Route path="/" exact component={Home}/>
            <Route path = "/aboutme" component ={About}/>
            <Route path ="/contact" component ={Contact}/>
            <Route path = "/projects" component ={Project }/>
            <Route path = "/resume"  component = {Resume}/>
            
        </Switch>
    );
}
export default Main;