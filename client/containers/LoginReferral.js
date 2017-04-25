import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Login and Signup Forms
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

// Chatbuddies component for left sidebar
import ChatBuddies from '../components/ChatBuddies'

// LoginActions
import LoginActions from '../actions/LoginActions';

//Browser history for login redirrect
import { browserHistory } from 'react-router';

//MainBody of page
import MainBody from '../components/MainBody';

//Stylesheet
import "../stylesheets/containers/LoginReferral.scss"

class LoginReferral extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.logoutfunction = this.logoutfunction.bind(this)
    }

    logoutfunction(event) {
    	this.props.loginActions.logout().then(function(result) {
    		if (!result.isLoggedIn) {
    			browserHistory.push('/login')
    		}});
    }

    componentDidMount() {
    	// If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
    	var { user, loginActions } = this.props;

    	loginActions.getLogin().then(function(result) {
			if (!result.isLoggedIn) {
				browserHistory.push('/login')				
			}});
    }

    render() {
    	// 				<button onClick={this.logoutfunction}>
		//			Log out
		//		</button>
    	return (
    		<div className="loginreferral">
    		    <div className="topleft">
    		    	<div className="buttonbarcontainer">
    		    		<i className="fa fa-times-circle" />
    		    		<i className="fa fa-minus-square" />
    		    		<i className="fa fa-plus-square" />
    		    	</div>
    				<div className="searchbarcontainer">
	    				<input type="text" className="searchbar" placeholder="Search"/>
	    				<i className="fa fa-search" />
	    			</div>
	    			<i className="fa fa-pencil-square-o" />
    			</div>
    			<header className="chatheader">
					<div className="headerleft">
						To: Waters Christian
					</div>
					<a href="www.google.com" className="headerright">
						Details
					</a>
				</header>
	    		<div className="middleleft">
	    			<ChatBuddies name="BC Waters" time="6:14 PM" text="This is a story about yada yada yada"/>
	    		</div>
	    		<div className="middleright">
    				Middle Right
	    		</div>
	    		<div className="bottomleft">
	    			Patrick
	    			<br/>
	    			Offline
	    		</div>
	    		<div className="bottomright">
	    			<div className="chatbarcontainer">
	    				<input type="text" className="chatbar" placeholder="iMessage"/>
	    				<i className="fa fa-smile-o"/>
	    			</div>
	    			<i className="fa fa-microphone" />
	    		</div>
			</div>
    	);
    };
}

/*****************
 * REDUX SECTION *
 *****************/

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(LoginActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReferral);
