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
    				<Initicon size={60} text="Christian Waters" seed={1}/>
    			</div>
    			<div className="text">
    				<div className="name">
    					Christian Waters
    				</div>
    				<div className="time">
    					9:30 PM
    				</div>
    				<div className="body">
    					Yada Yada Yada Yada Yada Yada Yada
    				</div>
    			</div>	
    		</div>
    	);
    };
}
export default ChatBuddies