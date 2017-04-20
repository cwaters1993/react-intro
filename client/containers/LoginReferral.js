import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Login and Signup Forms
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

// LoginActions
import LoginActions from '../actions/LoginActions';

//Browser history for login redirrect
import { browserHistory } from 'react-router';

//MainBody of page
import MainBody from '../components/MainBody';

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
    	return (
    		<div>
				<button onClick={this.logoutfunction}>
					Log out
				</button>
				<MainBody />
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
