import React, { Component } from 'react';

class WebApps extends Component {
    render () {
        return(
             <div className = 'container'>
                    <div className="row">
                    <div className="col-md-4 col-sm-4 mt-4   ">
                                <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                    <img className="card-img-top img-fluid" src={require ("../images/Apple Site Clone.png")} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                        <h5 className ="card-title ">Apple Site Clone</h5>
                                        <p className="card-text ">Using WordPress for developing this site.I developed this page practice purposes only</p>
                                        <a href="#" className="btn btn-primary">Show</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 mt-4   ">
                                <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                    <img className="card-img-top img-fluid" src={require ("../images/demo 2.png")} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                        <h5 className ="card-title ">Business page</h5>
                                        <p className="card-text ">Using WordPress for developing this site.I developed this page practice purposes only.</p>
                                        <a href="#" className="btn btn-primary">Show</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 mt-4">
                                <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                    <img className="card-img-top img-fluid" src={require ("../images/Linear Background ColorGenerator.png")} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                        <h5 className ="card-title ">Linear Background Color Generator</h5>
                                        <p className="card-text ">Any one can Generate CSS linear gradient Color using my this Application</p>
                                        <a href="https://sourov7.github.io/backgroundGenerator/" className="btn btn-primary" target= "blank">Show</a>
                                    </div>
                                </div>
                            </div>
                    {/* <div className="col-md-4 col-sm-6 mt-4   ">
                            <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                <img className="card-img-top img-fluid" src={require ("../images/web apps.jpg")} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5 className ="card-title ">Card title</h5>
                                    <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                    <div className="col-md-4 col-sm-6 mt-4   ">
                                <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                    <img className="card-img-top img-fluid" src={require ("../images/portfolio.png")} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                        <h5 className ="card-title ">Portfolio</h5>
                                        <p className="card-text ">It's my personal Portfolio Site. I have developer this Site using Reacj js. </p>
                                        <a href="#" target= "blank" className="btn btn-primary">Show</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4col-sm-6 mt-4">
                                <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                    <img className="card-img-top img-fluid" src={require ("../images/WildLifeAnimal.png")} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                        <h5 className ="card-title ">WildLife Animal</h5>
                                        <p className="card-text ">I have developed this site for Showing Any photo Album .</p>
                                        <a href="https://sourov7.github.io/robotSquad/" target= "blank" className="btn btn-primary">Show</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4col-sm-6 mt-4">
                                <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                    <img className="card-img-top img-fluid" src={require ("../images/robotSquad.png")} alt="Card image cap"/>
                                    <div className="card-body text-center">
                                        <h5 className ="card-title ">Robot Squad</h5>
                                        <p className="card-text ">I have developed this Site using React js, Robot API,   .This site has Super fast search option.</p>
                                        <a href="https://sourov7.github.io/robotSquad/" target= "blank" className="btn btn-primary">Show</a>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
    
        )
    }   
}
export default WebApps;