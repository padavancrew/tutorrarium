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

        const newProblem = document.getElementsByClassName('new-problem')[0];
        const problems = document.getElementsByClassName('problems')[0];

        newProblem.style.transitionDelay='0s';
        newProblem.style.opacity='0';
        newProblem.style.visibility='hidden';
        problems.style.transitionDelay='0.5s';
        problems.style.margin='0 25%';
    };

    render() {
        return (
            <div className="new-problem">
                <form>
                    <select className='subject-select' onChange={this.setSubject}>
                        <option selected disabled hidden>select a subject</option>
                        <option>placeholder1</option>
                        <option>placeholder2</option>
                        <option>placeholder3</option>
                        <option>placeholder4</option>
                        <option>placeholder5</option>
                        <option>add new subject</option>
                    </select>
                    <textarea  className='description-textarea' onChange={this.setDescription}/>
                    <button className='add-button' type="button" onClick={this.sendProblem}>Ask</button>
                </form>
            </div>
        );
    }
}
