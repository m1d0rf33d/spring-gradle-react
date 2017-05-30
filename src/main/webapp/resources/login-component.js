import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {activateUser} from './redux/action/actions.js'

class LoginComponent extends Component {
	
	render() {
	
		return (
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
					<button onClick={() => this.props.activateUser(true)}>Activate</button>
					<button onClick={() => this.props.activateUser(false)}>Logout</button>
				</div>
			
		);
	}
	
}


//Get apps state and pass it as props to UserList
//> whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
return {
users: state.users
};
}

//Get actions and pass them as props to to UserList
//> now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
return bindActionCreators({activateUser: activateUser}, dispatch);
}

//We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//> UserList is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(LoginComponent);