import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { NewProblem } from '../NewProblem/NewProblem';
import { Problem } from '../Problem/Problem';
import { AnswersList } from '../AnswersList/AnswersList';
import { getProblems, addProblem, showCurrentProblem } from '../../actions/actions';
import './Help.scss';

class Help extends Component {
    state = {
        isNewProblemVisible: false,
        isAnswersListVisible: false
    };

    newButtonClick = () => {
        if (this.state.isAnswersListVisible) {
            this.setState({
                isAnswersListVisible: false
            });
            setTimeout(() => {
                this.setState({
                    isNewProblemVisible: true
                });
            }, 500);
        } else {
            this.setState({
                isNewProblemVisible: true
            });
        }
    };

    addButtonClick = (problem) => {
        this.props.addProblem(problem);
        this.setState({
            isNewProblemVisible: false
        });
    };

    viewButtonClick = (currentProblem) => {
        this.props.showCurrentProblem(currentProblem);
        if (this.state.isNewProblemVisible) {
            this.setState({
                isNewProblemVisible: false
            });
            setTimeout(() => {
                this.setState({
                    isAnswersListVisible: true
                });
            }, 500);
        } else {
            this.setState({
                isAnswersListVisible: true
            });
        }
    };

    hideButtonClick = () => {
        this.setState({
            isAnswersListVisible: false
        });
    };

    componentDidMount() {
        this.props.getProblems();
    }

    render() {
        const { isNewProblemVisible, isAnswersListVisible } = this.state;
        const { currentProblem } = this.props;
        const problems = this.props.problems.map((item) => {
            return (
                <Problem problem={item} viewButtonClick={this.viewButtonClick} key={item._id}/>
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
                    transitionName="problems-container"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {isNewProblemVisible ? <NewProblem addButtonClick={this.addButtonClick}/> : null}
                    <div className="problems">
                        {problems}
                    </div>
                    {isAnswersListVisible ?
                        <AnswersList currentProblem={currentProblem} hideButtonClick={this.hideButtonClick}/> : null}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Help.propTypes = {
    problems: PropTypes.array.isRequired,
    currentProblem: PropTypes.object.isRequired,
    getProblems: PropTypes.func.isRequired,
    addProblem: PropTypes.func.isRequired,
    showCurrentProblem: PropTypes.func.isRequired
};

const mapStateToProps = ({ problems, currentProblem }) => {
    return {
        problems,
        currentProblem
    };
};

export default connect(mapStateToProps, {
    getProblems,
    addProblem,
    showCurrentProblem
})(Help);
