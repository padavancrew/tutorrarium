import React, { Component } from 'react';
import './NewProblem.scss';

export class NewProblem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            description: ''
        };
        this.setSubject = this.setSubject.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.sendProblem = this.sendProblem.bind(this);
    }

    setSubject(event) {
        this.setState({subject: event.target.value});
    }

    setDescription(event) {
        this.setState({description: event.target.value});
    }

    sendProblem() {
        alert('subject: ' + this.state.subject + ', description: ' + this.state.description); //temp
    }

    render() {
        return (
            <div className="new-problem">
                <form>
                    <select onChange={this.setSubject}>
                        <option>placeholder1</option>
                        <option>placeholder2</option>
                        <option>placeholder3</option>
                        <option>placeholder4</option>
                        <option>placeholder5</option>
                        <option>add new subject</option>
                    </select>
                    <input type="text" onChange={this.setDescription}/>
                    <input type="button" value="Add" onClick={this.sendProblem}/>
                </form>
            </div>
        );
    }
}
