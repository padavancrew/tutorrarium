import React, { Component, PropTypes } from 'react';
import './AnswersList.scss';

export class AnswersList extends Component {
    render() {
        const { currentProblem, hideButtonClick } = this.props;

        return (
            <div className="answers-list">
                <button className="hide-button" type="button" onClick={() => hideButtonClick()}>
                    Hide
                </button>
                <span>{currentProblem.description}</span>
            </div>
        );
    }
}

AnswersList.propTypes = {
    currentProblem: PropTypes.object.isRequired,
    hideButtonClick: PropTypes.func.isRequired
};
