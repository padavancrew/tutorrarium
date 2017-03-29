import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { NewProblem } from '../NewProblem/NewProblem';
import { Problem } from './../Problem/Problem';
import './Help.scss';

class Help extends Component {
    state = {
        isNewProblemVisible: false
    };

    componentDidMound() {
        //fetch
    }

    newButtonClick = () => {
        this.setState({
            isNewProblemVisible: true
        });
    };

    addButtonClick = (problem) => {
        fetch('/api/problems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(problem)
        });
        this.setState({
            isNewProblemVisible: false
        });
    };

    render() {
        const { isNewProblemVisible } = this.state;
        const problems = this.props.problems.map((item) => {
            return (
                <Problem problem={item} key={item.id}/>
            );
        });

        return (
            <div className="help">
                <div className="sort-field">
                    <button type="button" onClick={this.newButtonClick}>New</button>
                    (sort, search)
                </div>
                <ReactCSSTransitionGroup
                    className="problems-container"
                    transitionName="new-problem"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {isNewProblemVisible ? <NewProblem addButtonClick={this.addButtonClick}/> : null}
                    <div className="problems">
                        {problems}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Help.propTypes = {
    problems: PropTypes.array.isRequired
};

const mapStateToProps = ({ problems }) => {
    return {
        problems
    };
};

export default connect(mapStateToProps)(Help);
