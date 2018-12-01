import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';

import channelGetters from '../src/roots/my_axios_module';
import API_KEY from '../src/roots/yt_key'
import channelListId from '../src/roots/channels';
import VideoChannel from './compos/video_channel';
import VideosChannelList from './compos/video_list';
import AllChannelsPanel from './compos/chanels_panel';
//import VideoButtons from './compos/video_buttons';


class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            channels: [],
            selectedChanel: null, 
            lastVideos: [],
            lastVideo: null,
            toggleChannelsPanel: true,
            channelName: null
        }
        //this.searchChanels(channelListId.roman);
        this.searchLastVidoes(channelListId[5].id);
        console.log(channelListId[3])
        
    }
    //  searchChannels(channelId) {
    //     channelGetters.channelAllPlaylistsGetter({key: API_KEY, channelId: channelId}, channels => {
    //         console.log(channels)
    //         console.log(chanel)
    //         this.setState({ 
    //             channels: channels,
    //             selectedChanel: channels[1]
    //         });
    //     });        
    // } 
    
    searchLastVidoes(channelId) {
        var uploads = '';
        channelGetters.channelUploadsGetter({key: API_KEY, channelId: channelId}, contentDetails => {
            //console.log(contentDetails)
      
            uploads = contentDetails[0].contentDetails.relatedPlaylists.uploads;
            //console.log(uploads)
            channelGetters.channelAllVideosGetter({key: API_KEY, channelUploads: uploads}, lastVideos => {
                //console.log(lastVideos);
                this.setState({ 
                   lastVideos: lastVideos, 
                   //extantVideos: lastVideos, 
                   lastVideo: lastVideos[0],
                });
            })
        });
    }
   
    handleToggleChannelsPanel = () => {
        this.setState({
            toggleChannelsPanel: !this.state.toggleChannelsPanel
        });
    }

    handleName = (event) => {
        this.setState({channelName: event.target.value})
        console.log(this.state.channelName)
        //console.log(channelListId)
    }
    

    render() {
        return (
            <div className="container">
                <VideoChannel whichChanel={this.state.lastVideo} />
                <VideosChannelList 
                    onVideoSelect={lastVideo => this.setState({lastVideo})}
                    videos={this.state.lastVideos} 
                    
                /> 
                <div className="toggle-panel" 
                    onClick={this.handleToggleChannelsPanel}
                />   
                     
                {this.state.toggleChannelsPanel && <AllChannelsPanel 
                    hidePanel={this.handleToggleChannelsPanel}  
                    select={this.handleName}
                    text={this.state.channelName}
                    channelList={channelListId}    
                />}
                
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));




/* class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            channels: [],
            selectedChanel: null, 
        }
        this.chooseChanel("UCLLdzVN9P9lV8kmJhHsiuHA");
    }
    chooseChanel(term) {
        YTSearch({key: API_KEY, term: term}, channels => {
            console.log(channels)
            // console.log(chanel)
            this.setState({ 
                channels: channels,
                selectedChanel: channels[1]
            });
        });        
    }
    render() {
        return (
            <div>
                <VideoChanel whichChanel={this.state.selectedChanel} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));

 */