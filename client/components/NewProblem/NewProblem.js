import React, { Component } from 'react';
import './NewProblem.scss';

export class NewProblem extends Component {
    state = {
        subject: '',
        description: ''
    };

    setSubject = (event) => {
        this.setState({subject: event.target.value});
    };

    setDescription = (event) => {
        this.setState({description: event.target.value});
    };

    sendProblem = () => {
        alert('subject: ' + this.state.subject + ', description: ' + this.state.description); //temp
        fetch('http://localhost:3000/api/newProblem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
    };

    render() {
        return (
            <div className="new-problem">
                <form>
                    <select onChange={this.setSubject}>
                        <option selected disabled hidden>select a subject</option>
                        <option>placeholder1</option>
                        <option>placeholder2</option>
                        <option>placeholder3</option>
                        <option>placeholder4</option>
                        <option>placeholder5</option>
                        <option>add new subject</option>
                    </select>
                    <input type="text" onChange={this.setDescription}/>
                    <div className="add-new-button" onClick={this.sendProblem}>
                        <span>Add</span>
                    </div>
                </form>
            </div>
        );
    }
}
