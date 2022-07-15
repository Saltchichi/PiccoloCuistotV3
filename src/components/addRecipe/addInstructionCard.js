import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class recipeCard extends Component {
  constructor() {
    super();
    this.descriptionRef = React.createRef();
    this.state = {
      steps: [],
      newStep: "",
      idStep: 1,
      isValid: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const step_description = this.state.newStep;

    const steps = this.state.steps.slice();

    steps.push({
      step_number: this.state.idStep,
      step_description: step_description,
    });

    this.setState({
      steps: steps,
      newStep: "",
      idStep: this.state.idStep + 1,
      isValid: true,
    });
    this.descriptionRef.current.focus();
  };

  handleChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({ newStep: value });
  };

  handleDelete = (id) => {
    let steps = this.state.steps.slice();
    let index = steps.findIndex((step) => step.step_number === id);
    if (index !== -1) {
      steps.splice(index, 1);

      steps = steps.map((step) => {
        if (step.step_number > id) {
          return {
            step_number: step.step_number - 1,
            step_description: step.step_description,
          };
        } else {
          return {
            step_number: step.step_number,
            step_description: step.step_description,
          };
        }
      });

      let idStep;
      this.state.idStep > 1
        ? (idStep = this.state.idStep - 1)
        : (idStep = this.state.idStep);
      this.setState({ steps: steps, idStep: idStep });
    }
  };

  componentWillMount() {
    if (this.props.id !== "") {
      this.getData();
    }
  }

  getData() {
    axios
      .get(`http://localhost:3001/recipe/info/steps/${this.props.id}`)
      .then((response) => {
        const steps = response.data;
        let idStep = 0;
        steps.map((step, index) => {
          if (step.step_number > idStep) {
            idStep = step.step_number;
          }
          return idStep;
        });
        this.setState({ steps, idStep: idStep + 1, isValid: true });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
        <div className="text-center mb-3">
          <h3 className="text-gradient text-primary">Instructions</h3>
        </div>
        <div id="all-step">
          <div className="form-group">
            <h6>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  Étape 1
                </div>
                <div>
                  <FontAwesomeIcon icon="times" className="text-danger hover-danger" onClick={() => this.handleDelete(1)} />
                </div>
              </div>
            </h6>
            {this.state.steps.map((step) => (
              <div key={step.step_number}>
                <p id="step-1">{step.step_description}</p>
                <h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      Étape {step.step_number + 1}{" "}
                    </div>
                    <div>
                      <FontAwesomeIcon icon="times" className="text-danger hover-danger" onClick={() => this.handleDelete(step.step_number + 1)} />
                    </div>
                  </div>
                </h6>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            id="step"
            className="form-control"
            value={this.state.newStep}
            onChange={this.handleChange}
            required
            ref={this.descriptionRef}
          ></textarea>
          <button
            type="submit"
            id="add-step"
            className="btn bg-gradient-light w-auto me-1 mb-0 mt-2"
          >
            Ajouter étape
          </button>
        </form>
      </div>
    );
  }
}

export default recipeCard;
