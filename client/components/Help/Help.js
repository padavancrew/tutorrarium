import React, { Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Problem } from './../Problem/Problem';
import './Help.scss';

class Help extends Component {
    componentDidMound() {
        //fetch
    }

    render() {
        const problems = this.props.problems.map((item) => {
            return (
                <Problem problem={item}/>
            );
        });

        return (
            <div className="help">
                <div className="sort-field">
                    (sort, search)
                </div>
                <div className="add-new-button">
                    (create new button)
                </div>
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

const mapStateToProps = ({problems}) => {
    return {problems};
};

export default connect(mapStateToProps)(Help);