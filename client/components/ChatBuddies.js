import React from "react"

import Initicon from "react-initicon"

import "../stylesheets/components/ChatBuddies.scss"

class ChatBuddies extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
    	return(
    		<div className="chatbuddies">
    			<div className="icon">
    				<Initicon size={60} text={this.props.name} seed={1}/>
    			</div>
    			<div className="text">
    				<div className="name">
    					{this.props.name}
    				</div>
    				<div className="time">
    					{this.props.time}
    				</div>
    				<div className="body">
    					{this.props.text}
    				</div>
    			</div>	
    		</div>
    	);
    };
}
export default ChatBuddies