import React, { Component, PropTypes } from 'react';
import './NewProblem.scss';

export class NewProblem extends Component {
    state = {
        subject: '',
        description: ''
    };

    setSubject = (event) => {
        this.setState({
            subject: event.target.value
        });
    };

    setDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    render() {
        const { addButtonClick } = this.props;

        return (
            <div className="new-problem">
                <form className="new-problem-form">
                    <select className="subject-select" onChange={this.setSubject}>
                        <option selected disabled hidden>select a subject</option>
                        <option>placeholder1</option>
                        <option>placeholder2</option>
                        <option>placeholder3</option>
                        <option>placeholder4</option>
                        <option>placeholder5</option>
                        <option>add new subject</option>
                    </select>
                    <textarea className="description-textarea" onChange={this.setDescription}/>
                    <button className="add-button" type="button" onClick={() => addButtonClick(this.state)}>
                        Ask
                    </button>
                </form>
            </div>
        );
    }
}

NewProblem.propTypes = {
    addButtonClick: PropTypes.func.isRequired
};
