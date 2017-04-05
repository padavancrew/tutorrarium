import React, { Component, PropTypes } from 'react';
import './AnswersList.scss';

export class AnswersList extends Component {
    render() {
        const { hideButtonClick } = this.props;

        return (
            <div className="answers-list">
                <button className="hide-button" type="button" onClick={() => hideButtonClick()}>
                    Hide
                </button>
            </div>
        );
    }
}

AnswersList.propTypes = {
    hideButtonClick: PropTypes.func.isRequired
};
