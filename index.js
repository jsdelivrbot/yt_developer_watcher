import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';

import channelGetters from '../src/roots/my_axios_module';
import API_KEY from '../src/roots/yt_key'
import channelListId from '../src/roots/channels';
import VideoChannel from './compos/video_channel';
import VideosChannelList from './compos/video_list';
import AllChannelsPanel from './compos/channels_panel';
//import VideoButtons from './compos/video_buttons';




class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            channels: [],
            selectedChanel: null, 
            lastVideos: [],
            lastVideo: null,
            toggleChannelsPanel: false
        }
        //this.searchChannels(channelListId.roman);
        this.searchLastVideos(channelListId.roman);
        
    }

    showChannelsPanel = () => {
        this.setState.toggleChannelsPanel = true;
    }
    hideChannelsPanel = () => {
        this.setState.toggleChannelsPanel = false;
    }

    renderChannelsPanel() {
       return this.toggleChannelsPanel && 
        <AllChannelsPanel onClick={this.showChannelsPanel} hidePanel={this.hideChannelsPanel} /> 
    }

    

/*     searchChannels(channelId) {
        channelGetters.channelAllPlaylistsGetter({key: API_KEY, channelId: channelId}, channels => {
            console.log(channels)
            // console.log(chanel)
            this.setState({ 
                channels: channels,
                selectedChanel: channels[1]
            });
        });        
    } */
    
    searchLastVideos(channelId) {
        var uploads = '';
        channelGetters.channelUploadsGetter({key: API_KEY, channelId: channelId}, contentDetails => {
            console.log(contentDetails)
      
            uploads = contentDetails[0].contentDetails.relatedPlaylists.uploads;
            console.log(uploads)
            channelGetters.channelAllVideosGetter({key: API_KEY, channelUploads: uploads}, lastVideos => {
                console.log(lastVideos);
                this.setState({ 
                   lastVideos: lastVideos, 
                   //extantVideos: lastVideos, 
                   lastVideo: lastVideos[0],
                });
            })
        });
    }



    render() {
        return (
            <div>
                <VideoChannel whichChanel={this.state.lastVideo} />
                <VideosChannelList 
                    onVideoSelect={lastVideo => this.setState({lastVideo})}
                    videos={this.state.lastVideos} />
                { this.renderChannelsPanel() }   
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