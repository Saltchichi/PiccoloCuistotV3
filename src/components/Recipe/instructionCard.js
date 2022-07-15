import React, { Component } from 'react';
import axios from 'axios'
class recipeCard extends Component {
    constructor() {
        super();
        this.state = {
            steps: []
        }
    }

    callAPI() {
        axios.get(`http://localhost:3001/recipe/info/steps/${this.props.id}`)
            .then(response => {
                const steps = response.data;
                this.setState({ steps });
            }).catch(err => {
                console.error(err);
            });
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
                <div className="text-center mb-3">
                    <h3 className="text-gradient text-primary">Instruction</h3>
                </div>
                {this.state.steps.map((step, index) => (
                    <div key={index}>
                        <h6 className="mb-0">Etape {step.step_number}</h6>
                        <p className="mb-0">{step.step_description}</p>
                        <br/>
                    </div>
                ))}
            </div>
        )
    }
}

export default recipeCard;