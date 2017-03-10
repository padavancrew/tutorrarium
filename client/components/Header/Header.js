import React, {Component} from 'react';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header-logo" src={require('../../img/logo.png')}/>
                <span className="header-title">TUTORRARIUM</span>
                <ul className="navigation">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        );
    }
}
