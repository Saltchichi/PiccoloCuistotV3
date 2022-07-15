import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
class informationCard extends Component {
  constructor() {
    super();
    this.state = {
      star: 0,
    };
  }

  componentWillMount = () => {
    let star = 3 - this.props.difficulty;
    this.setState({ star });
  };

  render() {
    return (
      <div key={this.props.id} className="col-md-6 col-lg-4 mt-4">
        <div className="card">
          <img
            className="card-img-top img-fluid"
            alt="recette"
            src={this.props.photo}
            style={{ height: "275px" }}
          />
          <div
            className="position-relative overflow-hidden"
            style={{ height: "50px", marginTop: "-50px" }}
          >
            <div className="position-absolute w-100 top-0 z-index-1">
              <svg
                className="waves waves-sm"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 40"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="card-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  ></path>
                </defs>
                <g className="moving-waves">
                  <use
                    xlinkHref="#card-wave"
                    x="48"
                    y="-1"
                    fill="rgba(255,255,255,0.30"
                  ></use>
                  <use
                    xlinkHref="#card-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.35)"
                  ></use>
                  <use
                    xlinkHref="#card-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.25)"
                  ></use>
                  <use
                    xlinkHref="#card-wave"
                    x="48"
                    y="8"
                    fill="rgba(255,255,255,0.20)"
                  ></use>
                  <use
                    xlinkHref="#card-wave"
                    x="48"
                    y="13"
                    fill="rgba(255,255,255,0.15)"
                  ></use>
                  <use
                    xlinkHref="#card-wave"
                    x="48"
                    y="16"
                    fill="rgba(255,255,255,0.99)"
                  ></use>
                </g>
              </svg>
            </div>
          </div>
          <div className="card-body">
            <h4 className="text-center">{this.props.name}</h4>
            <hr className="horizontal dark" />
            <div className="row">
              <div className="col-4">
                <div className="text-center">
                  <h4 className="text-gradient text-primary">
                    <FontAwesomeIcon icon={faClock} /> {this.props.time}{" "}
                  </h4>
                  <p>Minutes</p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <p className="text-gradient text-primary">
                    {[...Array(this.props.difficulty)].map((e, i) => {
                      return <FontAwesomeIcon icon={faStarSolid} key={i} />;
                    })}
                    {[...Array(this.state.star)].map((e, i) => {
                      return <FontAwesomeIcon icon={faStar} key={i} />;
                    })}
                  </p>
                  <p>{this.props.difficultyName}</p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <h4 className="text-gradient text-primary" id="state3">
                    <FontAwesomeIcon icon={faUtensils} />
                  </h4>
                  <p>{this.props.category}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-sm btn-outline-default text-nowrap mb-0 mt-3"
              >
                <Link
                  to={{
                    pathname: `/recipe`,
                    state: { id: this.props.id },
                  }}
                  className="text-gradient text-primary"
                >
                  Consulter la recette
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default informationCard;
