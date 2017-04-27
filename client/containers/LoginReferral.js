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
        	chatBuddies: [
                {name: 'BW Waters', time: '9:30', text: 'This is a story about yada yada yada'},
                {name: 'Patrick Lu', time: '9:34', text: 'This is a story about yada yada yada'},
                {name: 'Tim Koo', time: '9:33', text: 'This is a story about yada yada yada'},
                {name: 'Chrsitian Waters', time: '9:36', text: 'This is a story about yada yada yada'},
                {name: 'yo', time: '9:37', text: 'This is a story about yada yada yada'}
            ],
            activeText: [
                {id: 0, 'text': 'hello!', name: 'BW Waters', time: '9:31'},
                {id: 1, 'text': 'can we start?', name: 'BW Waters', time: '9:32'},
                {id: 2, 'text': 'sure', name: 'me', time: '9.33'},
            ]
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
		var buddies = this.state.chatBuddies.map((buddy, index) => <ChatBuddies key={'chat_buddy'+index}name={buddy.name} time={buddy.time} text={buddy.text}/>);   
		var chat = this.state.activeText.map((message, index) => {
			if(message.name=='me') {
				return(
					<div className="myText" key={message.id}>
						<div className="justText">
							{message.text}
						</div>
					</div>
				)
			}
			else {
				return(
					<div className="theirText" key={message.id}>
						<div className="justText">
							{message.text}
						</div>
					</div>
				)
			};
		}); 	
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
	    			{buddies}
	    		</div>
	    		<div className="middleright">
    				{chat}
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
