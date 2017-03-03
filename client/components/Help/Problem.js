import React, { Component } from 'react';
import './Problem.scss';

export class Problem extends Component {
    render() {
        const problem = this.props.problem;

        return (
            <div className="problem">
                <div>{problem.userName}</div>
                <div>{problem.creationDate}</div>
                <div>{problem.subject}</div>
                <div>{problem.description}</div>
                <div>{problem.rating}</div>
                <div>{problem.answersCount}</div>
                <div>{problem.isAnswered.toString()}</div>
            </div>
        );
    }
}

Problem.propTypes = {
    problem: React.PropTypes.object
};
