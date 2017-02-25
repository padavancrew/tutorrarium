import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="logo-block">
                    <img src={require('../img/logo.png')}/>
                    <p>TUTORRARIUM</p>
                </div>
                <div className="social-block">
                    <p>Reach us on:</p>
                    <p><a href="/"><i className="fa fa-facebook"/></a></p>
                    <p><a href="/"><i className="fa fa-twitter"/></a></p>
                    <p><a href="/"><i className="fa fa-vk"/></a></p>
                    <p><a href="/"><i className="fa fa-google-plus"/></a></p>
                </div>
                <div className="creators-block">
                    <p>Created by:</p>
                    <p>Alexandr Mordvanik</p>
                    <p>Denis Cherkas</p>
                    <p>Edgar Omorogbe</p>
                    <p>Julia Shevchuk</p>
                    <p>Oleksii Kukuruza</p>
                </div>
                <div className="contacts-block">
                    <p>Contacts:</p>
                    <p><i className="fa fa-envelope-o"/> tutorrarium@gmail.com</p>
                    <p><i className="fa fa-phone"/> +38.066.1234567</p>
                </div>
            </div>
        );
    }
}
