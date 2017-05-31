import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateLoginState} from './redux/action/actions.js'
import {Redirect} from 'react-router'

class LoginComponent extends Component {
	
	render() {
	
		return (
			this.props.loginState ? <Redirect to="/"/> :
				<div className="login_wrapper">
					<div className="row">
						<div className="col-xs-3">Username: </div>
						<div className="col-xs-6">
							<input type="text"/>
						</div>
					</div>
					<br/>
					<div className="row">
						<div className="col-xs-3">Password: </div>
						<div className="col-xs-6">
							<input type="password"/>
						</div>
					</div>
					<br/>
					<button onClick={() => this.props.updateLoginState(true)}>Login</button>
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