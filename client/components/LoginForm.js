/**
* Login Form
* This is the login form for the app.
* author: @
*/

import React from 'react';
import "../stylesheets/components/LoginForm.scss"

//Browser history for login redirrect
import { browserHistory } from 'react-router'

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        // binding submitFormFunction to this. this refers to our current class.
        this.submitFormFunction = this.submitFormFunction.bind(this);

        this.state = {
            password: "",
            email: ""
        };  

        this.handleEmailChange = this.handleEmailChange.bind(this);

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    
    handleEmailChange(event) {
        // Sets the state variable email when field is updated
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        // Sets the state variable password when field is updated
        this.setState({password: event.target.value});
    }

    submitForm = (event) => {
        // ES6 function. Sets variable submitForm as a function with event as the input. Autobinds to this (important).
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
        var data = {password: this.state.password, email: this.state.email};
        this.props.loginFunction(data).then(function(result) {
            if (result.isLoggedIn) {
                browserHistory.push('/')               
            }
        });
    }

    submitFormFunction(event) {
        // Javascript regular function definition, same function as above, but DOESN'T autobind to this. You need to bind it in constructor.
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements
        return (
            <form className="loginform" onSubmit={this.submitForm}>
                <div className="email">
                    <div className="email-container">
                        <input className="form-control" value={this.state.email} onChange={this.handleEmailChange} type="email" placeholder="Email Address" required />
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="password">
                    <div className="password-container">
                        <input className="form-control" value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="Password" required />
                        <i className="fa fa-lock" />
                    </div>
                </div>
                <button className="btn" type="Submit">
                    Log in
                </button>
            </form>
        );
    }
}

export default LoginForm;