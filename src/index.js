import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';

import channelGetters from '../src/roots/my_axios_module';
import API_KEY from '../src/roots/yt_key'
import VideoChanel from './compos/video_chanel';
import channelListId from '../src/roots/channels';
//import VideoButtons from './compos/video_buttons';




class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            channels: [],
            selectedChanel: null, 
            lastVideos: [],
            lastVideo: null
        }
        //this.searchChanels(channelListId.roman);
        this.searchLastVidoes(channelListId.roman);
        
    }
/*     searchChanels(channelId) {
        channelGetters.channelAllPlaylistsGetter({key: API_KEY, channelId: channelId}, channels => {
            console.log(channels)
            // console.log(chanel)
            this.setState({ 
                channels: channels,
                selectedChanel: channels[1]
            });
        });        
    } */
    
    searchLastVidoes(channelId) {
        var uploads = '';
        channelGetters.channelUploadsGetter({key: API_KEY, channelId: channelId}, contentDetails => {
            console.log(contentDetails)
      
            uploads = contentDetails[0].contentDetails.relatedPlaylists.uploads;
            console.log(uploads)
            channelGetters.channelAllVideosGetter({key: API_KEY, channelUploads: uploads}, lastVideos => {
                console.log(lastVideos);
                this.setState({ 
                   lastVideos: lastVideos, 
                   lastVideo: lastVideos[0] 
                });
            })
        });
    }



    render() {
        return (
            <div>
                <VideoChanel whichChanel={this.state.lastVideo} />
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