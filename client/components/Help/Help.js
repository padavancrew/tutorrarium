import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NewProblem } from '../NewProblem/NewProblem';
import { Problem } from './../Problem/Problem';
import './Help.scss';

class Help extends Component {
    componentDidMound() {
        //fetch
    }

    newButtonClick = () => {
        const newProblem = document.getElementsByClassName('new-problem')[0];
        const problems = document.getElementsByClassName('problems')[0];

        problems.style.transitionDelay='0s';
        problems.style.margin='0 0 0 50%';
        newProblem.style.transitionDelay='0.5s';
        newProblem.style.visibility='visible';
        newProblem.style.opacity='1';
    };

    render() {
        const problems = this.props.problems.map((item) => {
            return (
                <Problem problem={item}/>
            );
        });

        return (
            <div className="help">
                <div className="sort-field">
                    <button type="button" onClick={this.newButtonClick}>New</button>
                    (sort, search)
                </div>
                <NewProblem />
                <div className="problems">
                    {problems}
                </div>
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
