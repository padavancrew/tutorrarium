import React, { Component } from 'react';
import { Problem } from './Help/Problem';
import './Help.scss';

export class Help extends Component {
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
    problems: React.PropTypes.array
};
