import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container position-sticky z-index-sticky top-0">
        <nav className="navbar navbar-expand-lg  blur blur-rounded top-0  z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container">
            <div className="navbar-brand font-weight-bolder ms-sm-3">
              <Link to={{ pathname: `/` }}>Cooked</Link>
            </div>
            <button
              className="navbar-toggler shadow-none ms-2 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mt-1">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav navbar-nav-hover mx-auto">
                {/* <li className="nav-item px-3">
                                    <a className="nav-link">
                                        Pages</a>
                                </li>

                                <li className="nav-item px-3">
                                    <a className="nav-link">
                                        Utilities</a>
                                </li>

                                <li className="nav-item px-3">
                                    <a className="nav-link">
                                        Blocks</a>
                                </li>

                                <li className="nav-item px-3">
                                    <a className="nav-link">
                                        Docs</a>
                                </li> */}
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item my-auto ms-3 ms-lg-0">
                  <div className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0">
                    <Link
                      to={{ pathname: `/addRecipe` }}
                      style={{ color: "white" }}
                    >
                      Ajouter une recette
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
