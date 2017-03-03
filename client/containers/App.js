import React, { Component } from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from '../components/Home';
import { Help } from '../components/Help';

import problemsData from './problems_database'; //temp

export class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router history={browserHistory}>
                    <Route path="home" component={Home}/>
                    <Route path="help" component={() => (<Help problems={problemsData}/>)}/>
                    <Redirect from="*" to="home"/>
                </Router>
                <Footer />
            </div>
        );
    }
}
