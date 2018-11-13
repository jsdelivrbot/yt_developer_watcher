import React, {Component} from "react";

class ChannelsPanel extends Component{
    render(){
        return(
            <div className="channels-panel" >
                <div onClick={this.props.hidePanel}>Zamknij</div>
                <span> Jestem tu</span>
            
            </div>
        )
    }
}

export default ChannelsPanel;