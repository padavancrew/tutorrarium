import React, { Component } from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from '../components/Home';
import { Help } from '../components/Help';

export class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router history={browserHistory}>
                    <Route path="home" component={Home}/>
                    <Route path="help" component={Help}/>
                    <Redirect from="*" to="home" />
                </Router>
                <Footer />
            </div>
        );
    }
}
