import React, {Component} from 'react'
import UserList from './redux/container/user-list.js'
import UserDetail from './redux/container/user-details.js'
import axios from 'axios'
import {connect} from 'react-redux'
import ReactRedirect from 'react-redirect'

class HomeComponent extends Component {

/*	 componentDidMount() {
		    axios.get(`http://localhost/rush-pos/users`)
		      .then(res => {
		    	  console.log(res);
		      }); 
		  }*/ 
	
	render() {
		if (window.localStorage.getItem('auth') != 'true') {
			return (<ReactRedirect location="http://localhost:8080/rush/#/login"></ReactRedirect>);
		} else {
			return (
					<div> 
						<UserList/>
						<UserDetail/>
					</div>
				);
		
		}
	}
	
}

//Get apps state and pass it as props to UserList
//   > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
	
 return {
     activeUser: state.activeUser == null ? false : state.activeUser
 };
}


//We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//   > UserList is now aware of state and actions
export default connect(mapStateToProps)(HomeComponent);