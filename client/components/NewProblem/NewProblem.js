import React, { Component } from 'react';
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

    sendProblem = () => {
        fetch('/api/problems', {
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
                    <button type="button" onClick={this.sendProblem}>Add</button>
                </form>
            </div>
        );
    }
}
