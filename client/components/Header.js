import React, {Component} from 'react';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header-logo" src={require('../img/logo.png')}/>
                <span className="header-title">TUTORRARIUM</span>

                <div className="header-navBlock">
                <div className="header-navButton">Home </div>
                <div className="header-navButton"> Contact</div>
                <div className="header-navButton"> About</div>
                <div className="header-navButton"> Links</div>
                <div className="header-navButton"> Services </div>
            </div>
            </div>
        );
    }
}
