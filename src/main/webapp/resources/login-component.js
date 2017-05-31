import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateLoginState} from './redux/action/actions.js'
import {Redirect} from 'react-router'
import axios from 'axios'

class LoginComponent extends Component {

	getInitialState () {
		return { username: '', password: '' };
	}

	handleInputChange(e) {
		if (e.target.id == 'username-input') {
			this.setState({'username': e.target.value});
		} else {
			this.setState({'password': e.target.value});
		}
	}

	login() {

		var username = this.state.username, password = this.state.password;

		var authOptions = {
			method: 'POST',
			url: '/rush/oauth/token?grant_type=password&username='+ username +'&password='+ password +'&client_id=taf',
			data: {},
			headers: {
				'Authorization': 'Basic dGFmOnRhZl9zZWNyZXQ=',
				'Content-Type': 'application/json'
			},
			json: true
		};

		var tref = this;

		axios(authOptions)
			.then(function (response) {
				tref.props.updateLoginState(true);
			}).catch(function(error) {
				alert(error);
			})
	}
	
	render() {
		return (
			this.props.loginState ? <Redirect to="/"/> :
				<div className="login_wrapper">
					<div className="row">
						<div className="col-xs-3">Username: </div>
						<div className="col-xs-6">
							<input type="text" id="username-input" onChange={this.handleInputChange.bind(this)}/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-xs-3">Password: </div>
						<div className="col-xs-6">
							<input  type="password" id="password-input" onChange={this.handleInputChange.bind(this)}/>
						</div>
					</div>
					<br/>
					<button onClick={this.login.bind(this)}>Login</button>
				</div>
			
		);
	}
	
}


//Get apps state and pass it as props to UserList
//> whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
return {
	loginState: state.loginState
};
}

//Get actions and pass them as props to to UserList
//> now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
return bindActionCreators({updateLoginState: updateLoginState}, dispatch);
}

//We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//> UserList is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(LoginComponent);