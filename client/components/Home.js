import React, { Component } from 'react';
import './Home.scss';
import homeInfo1 from '../img/home-info-1.jpg';
import homeInfo2 from '../img/home-info-2.jpg';
import homeInfo3 from '../img/home-info-3.jpg';

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
                        <img src={homeInfo1}/>
                        <p>Need help?</p>
                        <p>Go to Help Page to submit your task</p>
                        <p>or use Quick Start menu!</p>
                    </div>
                    <div className="info-block">
                        <img src={homeInfo2}/>
                        <p>Want to help?</p>
                        <p>Provide answers an solutions to existed tasks!</p>
                    </div>
                    <div className="info-block">
                        <img src={homeInfo3}/>
                        <p>Check for available tasks and solutions.</p>
                        <p>Rate most interested tasks</p>
                        <p>and most helpful users!</p>
                    </div>
                </div>
            </div>
        );
    }
}
