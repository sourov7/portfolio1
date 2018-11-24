import React, { Component } from 'react';


class Contact extends Component {
    render (){
        return (
            <div className = "">
                <div className= "container shadow p-3 mb-5 rounded  containerBackground mt-5" >
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-center text-muted ">
                            <div>
                                <h3 style = {{textTransform:"uppercase"}} className = "contactTitle letter-spacing"> Tayef Ahmed Sourov  </h3>
                                <img style = {{height:'200px' , width : "250px"}} className=" contactimage1 rounded mx-auto d-block  shadow -lg p-3 mb-5  rounded " src={require("../images/c1.jpg")} alt="logo"/>
                               <div className="forHigherInfo">
                               <p className = "mt-5 letter-spacing">
                                Hi ! are you looking for making <strong> Personal | Business | or E-Commerce Website   And Any Application With modern & most Secure Technologies? </strong> I am here.
                                </p>
                                <p className ="letter-spacing">
                                    <strong>
                                    A Computer Engineering graduate with over 2 years professional experience in software engineering ( design and development ).
                                    </strong>
                                </p>
                                <p className ="letter-spacing">
                                 I am a passionate <strong>Ecommerce and Web Development Specialist</strong>. I have built many applications and stores and thrive in startup companies.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 text-center text-muted">
                            <div>
                                <h3 style = {{textTransform:"uppercase"}} className = "contactTitle letter-spacing"> contact me </h3>

                                {/* ===============  Contact Icon and Info ================= */}

                                <hr/>
                                <div className="contactList ">
                                    <div className= "row">
                                        <div className="col-md-4 col-sm-4">
                                        <a href="" target="blank"><i  className="fas fa-phone-square iconeSize mt-3"></i>
                                        </a>
                                        </div>
                                        <div className="col-md-8 col-sm-8">
                                            <p className = "contactInfo text-justify letter-spacingIconText mt-4" >+880 16 73883427 </p>
                                        </div>

                                    </div>
                                    <div className= "row">
                                        <div className="col-md-4 col-sm-4">
                                            <a href="https://www.facebook.com/tayefahmad.sourov" target="blank"><i className="fab      fa-facebook-square iconeSize mt-3"></i>
                                            </a>
                                        </div>
                                        <div className="col-md-8 col-sm-8">
                                            <p className = "contactInfo text-justify letter-spacingIconText mt-4" > tayefahmad.sourov </p>
                                        </div>

                                    </div>
                                    <div className= "row">
                                        <div className="col-md-4 col-sm-4">
                                        <a href="https://mail.google.com" target="blank">
                                            <i className="far fa-envelope iconeSize mt-3"></i> 
                                            </a>
                                        </div>
                                        <div className="col-md-8 col-sm-8">
                                            <p className = "contactInfo text-justify letter-spacingIconText mt-4 ">tayefahmed10.cse@gmail.com</p>
                                        </div>

                                    </div>
                                    {/* <div className = "phoneSpace"> <a href=""><i class="fas fa-phone-square"></i> </a> +880 16 73883427 </div>
                                    <div> <a href=""><i class="fas fa-phone-square"></i> </a> tayefahmad.sourov</div>
                                    <div><a href=""><i class="fas fa-phone-square"></i> </a>tayefahmed10.cse@mail.com</div>
                                     */}
                                    {/* <ul>
                                        <li>
                                            <a href=""><i style= {{paddingTop:"30px"}} class="fas fa-phone-square"></i> 
                                            <span> +880 16 73883427 </span>
                                            </a>                                   
                                        </li>
                                        <li > 
                                            <a href="https://www.facebook.com/tayefahmad.sourov"><i class="fab fa-facebook-square"></i>
                                            <span > tayefahmad.sourov</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://mail.google.com">
                                            <i style= {{paddingLeft:"70px"}} class="far fa-envelope"></i> 
                                            <span style= {{paddingBottom:"30px"}}>tayefahmed10.cse@gmail.com</span>
                                            </a>
                                        </li>                         
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
        </div>
        );
    }
}
export default Contact;