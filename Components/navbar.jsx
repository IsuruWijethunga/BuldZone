import React from "react";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="fixed-navbar ">
      <div className="hero_bg_box hero_bg_bo">
        <div className="hero_img_box ">
          <img src="images/navbar.png" alt="" className="containerfit"/>
        </div>
      </div>
       <header className="header_section header_sectio">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="https://www.buildzone.online">
                <span>BuildZone IT</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link " href="/">
                      Home{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About">
                      {" "}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Our Services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="/Why Us">
                      Why Us 
                     
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Our Members">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Our Members">
                      Contact Us
                    </a>
                  </li>
                  {/* <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form> */}
                </ul>
              </div>
            </nav>
          </div>
        </header>
    </div>
  );
};

export default Navbar;
