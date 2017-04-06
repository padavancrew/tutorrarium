import React, { Component, PropTypes } from 'react';
import './Problem.scss';

export class Problem extends Component {
    render() {
        const { problem, viewButtonClick } = this.props;
        const isAnswered = (
            problem.isAnswered ?
                ( <i className="fa fa-check-circle-o answered"/> ) :
                ( <i className="fa fa-circle-o not-answered"/> )
        );

        return (
            <div className="problem">
                <div className="rating">
                    <i className="fa fa-star-o"/>
                    <span>{problem.rating}</span>
                </div>
                <div className="user-name">
                    <span>created by {problem.userName} {problem.creationDate}</span>
                </div>
                <div className="subject">
                    <i className="fa fa-book"/>
                    <span>{problem.subject}</span>
                </div>
                <div className="description">
                    <span>{problem.description}</span>
                </div>
                <div className="is-answered">
                    {isAnswered}
                </div>
                <div className="answers">
                    <span>{problem.answersCount} answers</span>
                </div>
                <div className="view-button" onClick={() => viewButtonClick(problem)}>
                    <span>View</span>
                    <i className="fa fa-chevron-right"/>
                </div>
            </div>
        );
    }
}

Problem.propTypes = {
    problem: PropTypes.object.isRequired,
    viewButtonClick: PropTypes.func.isRequired
};
