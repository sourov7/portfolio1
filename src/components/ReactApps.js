import React, { Component } from 'react';

class ReactApps extends Component {
    render () {
        return(
            <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 mt-4   ">
                            <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                <img className="card-img-top img-fluid" src={require ("../images/portfolio.png")} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5 className ="card-title ">Portfolio</h5>
                                    <p className="card-text ">It's my personal Portfolio Site. I have developer this Site using Reacj js.</p>
                                    <a href="#" className="btn btn-primary">SHOW </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4col-sm-6 mt-4">
                            <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                <img className="card-img-top img-fluid" src={require ("../images/robotSquad.png")} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5 className ="card-title ">Robot Squad</h5>
                                    <p className="card-text ">I have developed this Site using React js, Robot API,Has Super fast search option.</p>
                                    <a href="https://sourov7.github.io/robotSquad/"  className="btn btn-primary" target= "blank" >SHOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mt-4 ">
                            <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                <img className="card-img-top img-fluid" src={require ("../images/Linear Background ColorGenerator.png")} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5 className ="card-title ">Linear Gradent ColorGenerator</h5>
                                    <p className="card-text ">Any one can Generate CSS linear gradient Color using my this Application.</p>
                                    <a href="https://sourov7.github.io/backgroundGenerator/" className="btn btn-primary" target= "blank" >SHOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mt-4 ">
                            <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                <img className="card-img-top img-fluid" src={require ("../images/React-Blogs.png")} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5 className ="card-title ">Demo</h5>
                                    <p className="card-text ">Some quick example text to build ontitle and make up the bulk of the content.</p>
                                    <a href="#" className="btn btn-primary">SHOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }   
}
export default ReactApps;
