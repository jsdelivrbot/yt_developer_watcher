import React, {Component} from "react";

class ChannelsPanel extends Component{
    
    showChannels = () => {
        console.log(this.props.channelList)
    }

   
    // const allNames =  this.props.channelList.map((names) => 
    //     <li>{names.name}</li>
    // );
    
    render(){
        return(
            <div className="chanels-panel col-md-4" >
                {/* <div class="toggle-button" onClick={this.props.hidePanel}></div> */}
                <h6>Wybierz kanał</h6> 
                <div value="roman"  onClick={this.showChannels} >roman</div>   
                
                {/* <ul>{allNames}</ul>     */}
                
                <div>text: {this.props.text}</div>  
                <input onChange={this.props.select} />


            </div>
            
        )
    }
}

export default ChannelsPanel;