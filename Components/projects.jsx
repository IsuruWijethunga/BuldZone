import React from "react";
import "./project.css"; 

const Projects = () => {
    return (
        <section id="mu-abtus-counter" className="service_section layout_padding">
            <div className="service_container">
        <div  className="container">
          <div  className="row">
            <div  className="col-md-12">
              <div  className="mu-abtus-counter-area">
                <div  className="row">
               
                  <div  className="col-lg-3 col-md-3 col-sm-3">
                    <div  className="mu-abtus-counter-single">
                      <span  className="fa fa-book"></span>
                      <h4  className="counter">568</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                
                
                  <div  className="col-lg-3 col-md-3 col-sm-3">
                    <div  className="mu-abtus-counter-single">
                      <span  className="fa fa-users"></span>
                      <h4  className="counter">35000</h4>
                      <p>Users</p>
                    </div>
                  </div>
                
                  <div  className="col-lg-3 col-md-3 col-sm-3">
                    <div  className="mu-abtus-counter-single">
                      <span  className="fa fa-flask"></span>
                      <h4  className="counter">65</h4>
                      <p>Members</p>
                    </div>
                  </div>
                
                  <div  className="col-lg-3 col-md-3 col-sm-3">
                    <div  className="mu-abtus-counter-single no-border">
                      <span  className="fa fa-user-secret"></span>
                      <h4  className="counter">25</h4>
                      <p>Partner</p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
};

export default Projects;