import React, {Component} from "react";

class ChannelsPanel extends Component{
    render(){
        return(
            <div className="chanels-panel col-md-2" >Jestem tu
                <div class="hide-button" onClick={this.props.hidePanel}></div>
            </div>
            
        )
    }
}

export default ChannelsPanel;