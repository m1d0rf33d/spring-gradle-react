import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Match from 'react-router';
import {HashRouter as Router, Route, Switch, hashHistory} from 'react-router-dom';
import HomeComponent from './home-component.js';
import LoginComponent from './login-component.js'

class App extends Component {

	constructor(props) {
		super(props);
	}
	
    render() {
        return (
            <Router history="{hashHistory}">
            <div>
            	<Switch>
        			<Route  exact path='/' component={HomeComponent}/>
        			<Route  path='/login' component={LoginComponent}/>
        		</Switch>
            </div>
            </Router>
        		
            ); 
    }
}

export default App;
