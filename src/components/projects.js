import React, { Component } from 'react';
import {Tabs, Tab, Card, CardText, CardTitle, CardActions,CardMenu,Button,IconButton} from "react-mdl"
import '../App.css';
import  MobileApps from "./MolileApps.js";
import  WebApps from "./WebApps";
import  ReactApps from "./ReactApps";

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 1 };
    }


      toogleCatergory = () =>{
    //  ============================= Projects 1 Web app ====================

        if (this.state.activeTab === 0) {
            return (

                <WebApps/>
                // <div className = 'container'>
                //     <div className="row">
                //     <div className="col-md-4 col-sm-6 mt-4   ">
                //             <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                //                 <img className="card-img-top img-fluid" src={require ("../images/web apps.jpg")} alt="Card image cap"/>
                //                 <div className="card-body text-center">
                //                     <h5 className ="card-title ">Card title</h5>
                //                     <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //                     <a href="#" className="btn btn-primary">Go somewhere</a>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
            )
        }
        //  ============================= Projects 2 React app ====================

        else if (this.state.activeTab === 1) {
            return (

                <ReactApps/>
                // <div className="container">
                //     <div className="row">
                //         <div className="col-md-4 col-sm-6 mt-4   ">
                //             <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                //                 <img className="card-img-top img-fluid" src={require ("../images/React-Blogs.png")} alt="Card image cap"/>
                //                 <div className="card-body text-center">
                //                     <h5 className ="card-title ">Card title</h5>
                //                     <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //                     <a href="#" className="btn btn-primary">Go somewhere</a>
                //                 </div>
                //             </div>
                //         </div>
                //         <div className="col-md-4col-sm-6 mt-4">
                //             <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                //                 <img className="card-img-top img-fluid" src={require ("../images/React-Blogs.png")} alt="Card image cap"/>
                //                 <div className="card-body text-center">
                //                     <h5 className ="card-title ">Card title</h5>
                //                     <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //                     <a href="#" className="btn btn-primary">Go somewhere</a>
                //                 </div>
                //             </div>
                //         </div>
                //         <div className="col-md-4 col-sm-6 mt-4 ">
                //             <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                //                 <img className="card-img-top img-fluid" src={require ("../images/React-Blogs.png")} alt="Card image cap"/>
                //                 <div className="card-body text-center">
                //                     <h5 className ="card-title ">Card title</h5>
                //                     <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //                     <a href="#" className="btn btn-primary">Go somewhere</a>
                //                 </div>
                //             </div>
                //         </div>
                //         <div className="col-md-4 col-sm-6 mt-4 ">
                //             <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                //                 <img className="card-img-top img-fluid" src={require ("../images/React-Blogs.png")} alt="Card image cap"/>
                //                 <div className="card-body text-center">
                //                     <h5 className ="card-title ">Card title</h5>
                //                     <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //                     <a href="#" className="btn btn-primary">Go somewhere</a>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>


            )
        }
        else if (this.state.activeTab === 2) {
            return (
                    <div>
                        <MobileApps/>
                    </div>
                
                // <div className="container">
                //     <div className="row">
                //         <div className="col">
                //         <h1>
                //             Hi !!  Mobile  Applications are Coming Soon ....
                //         </h1>
                //         </div>
                //     </div>
                // </div> 
            )
        }
    }
    render (){
        return (

            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="font-weight-bold" style={{fontFamily:"roboto"}} >Web Apps </Tab>
                    <Tab className="font-weight-bold" style={{fontFamily:"roboto"}} > React </Tab>
                    <Tab className="font-weight-bold" style={{fontFamily:"roboto"}} >Mobile Apps</Tab>
                </Tabs>
                <section>
                    <div className=".container-fluid">
                        <div className=".row">
                          <div className="">

                           {this.toogleCatergory ()}
                          </div>
                        </div>
                    </div>
                    {/* <div className="content">Content for the tab: {this.state.activeTab}</div> */}
                </section>
            </div>    

            // <div>
            //     <h1> Project page</h1>
            // </div>
        )
    }
}
export default Project;