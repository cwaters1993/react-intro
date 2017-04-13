/**
* Login Form
* This is the login form for the app.
* author: @
*/

import React from 'react';
import "../stylesheets/components/SignupForm.scss"

class SignupForm extends React.Component {

    constructor(props) {
        super(props);

        // binding submitFormFunction to this. this refers to our current class.
        this.submitFormFunction = this.submitFormFunction.bind(this);

        this.state = {

        }
    }
    
    submitForm = (event) => {
        // ES6 function. Sets variable submitForm as a function with event as the input. Autobinds to this (important).
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
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
            <form className="signupform" onSubmit={this.submitForm}>
                <div className="email">
                    <div className="email-container">
                        <input className="form-control" type="email" placeholder="Email Address" required />
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="password">
                    <div className="password-container">
                        <input className="form-control" type="password" placeholder="Password" required />
                        <i className="fa fa-lock" />
                    </div>
                </div>
                <button className="btn" type="Submit">
                    Sign up
                </button>
            </form>
        );
    }
}

export default SignupForm;