import React, { Component } from 'react';
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="quick-start">
                    (quick start component)
                </div>
                <div className="high-rated">
                    (high rated component)
                </div>
                <div className="info">
                    <div className="info-block">
                        <img src={require('../img/home-info-1.jpg')}/>
                        <p>Need help?</p>
                        <p>Go to Help Page to submit your task</p>
                        <p>or use Quick Start menu!</p>
                    </div>
                    <div className="info-block">
                        <img src={require('../img/home-info-2.jpg')}/>
                        <p>Want to help?</p>
                        <p>Provide answers an solutions to existed tasks!</p>
                    </div>
                    <div className="info-block">
                        <img src={require('../img/home-info-3.jpg')}/>
                        <p>Check for available tasks and solutions.</p>
                        <p>Rate most interested tasks</p>
                        <p>and most helpful users!</p>
                    </div>
                </div>
            </div>
        );
    }
}
