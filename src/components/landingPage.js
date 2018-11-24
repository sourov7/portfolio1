import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Particles from 'react-particles-js'



class Home extends Component {
    
    render (){

        let particleOptions = {
                particles:{
                number : {
                value:80,
                density:{
                    enable:"true",
                    value_area:800
                }
                }
                },
                line_linked: {
                    enable: true,
                    distance: 300,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 2
                    },
                    "color": {
                    value: 
                        [ "#000000","#FFC107", "#9C27B0","#2196F3"]
                    
                    },
            }
        return (
            // <div style = { {width:"100%" margin:"auto"}} >
            <div className = "container-fluid  measure" >
            <Particles className = "particleclass" params = {particleOptions} />
                <div className="row">
                    <div className = "col-md-12 col-sm-12 text-center mt-10">
                         {/* <img className ="image" src={require('../images/av2.png')}> */}
                        <img src = {require('../images/av2.png')} className = "image  "/>

                        {/* jumbroton area  */}

                        <div className="bannerText mt-0 ">
                            <div className = "col-md-8 col-sm-12 col-xs-12  offset-md-2 mt-0"> 
                                <div className=" jumborton jumbotron-fluid  janbortonSpace shadow p-3 mb-5  rounded   ">
                                        <div className=" jumboSpace ">
                                            <h2  className=" display-5 janbortonSpace text-black robotoFont letterSapcing-h font-weight-bold col-sm-12">Full Stack Web Developer </h2>
                                            <hr className ="horizontalColor"/>
                                            <p className="lead text-black robotoFont letterSapcing"> Html/Css | Bootsrap | Material Ui | JavaScript | React | Redux | React Native | NodeJS | Express | MongoDB | PHP | WordPress </p>
                                            
                                            <div className = " robotoFont socalLink text-center text-black">
                                                <a  href="https://www.facebook.com/tayefahmad.sourov" target = "blank"> <i className="fab fa-facebook-square "></i></a>

                                                {/* <a  className = "socalLink text-white " href="" target = "blank"> <i class="fab fa-twitter-square"></i></a>
                                                <a   className = "socalLink text-white " href="" target = "blank"> <i class="fab fa-linkedin"></i></a>
                                                <a   className = "socalLink text-white " href="" target = "blank"> <i class="fab fa-github"></i></a>                               */}
                                                <a href="" target = "blank"> <i className="fab fa-twitter-square"></i></a>
                                                <a href="" target = "blank"> <i className="fab fa-linkedin"></i></a>
                                                <a  href="https://github.com/sourov7" target = "blank"> <i className="fab fa-github"></i></a>  

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
}
export default Home;