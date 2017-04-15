/**
* Auth Page
* This is the authentication page for the app.
* author: @
*/

import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Login and Signup Forms
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

// LoginActions
import LoginActions from '../actions/LoginActions';

// Stylesheets .scss is like .css but it has built in scoping
import '../stylesheets/containers/AuthPage.scss';

//Browser history for login redirrect
import { browserHistory } from 'react-router'

class AuthPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
        var { user, loginActions } = this.props;
        
        loginActions.getLogin().then(function(result) {
            if (result.isLoggedIn) {
                browserHistory.push('/')               
            }
        });
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements

        // this.props is a dictionary, so var { loginActions } is the same thing as var loginActions = this.props['loginActions'];
        if (this.props.route.login) {
            var { user, loginActions } = this.props;
            return (
                <div className="auth">
                    <div className="login">
                        <div className="logincontainer">
                            <LoginForm loginFunction={loginActions.login} />
                            <div className="bottombar">
                                Don't have an account?
                                <a href="/signup" className="btn">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            var { user, loginActions } = this.props;
            return (
                <div className="auth">
                    <div className="signup">
                        <div className="signupcontainer">
                            <SignupForm signupFunction={loginActions.signup} blah={"boo"} />
                            <div className="bottombar">
                                Already have an account?
                                <a href="/login" className="btn">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
