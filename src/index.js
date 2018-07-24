import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';

import channelGetters from '../my_axios_module';
import API_KEY from '../yt_key'
import VideoChanel from './compos/video_chanel';
//import VideoButtons from './compos/video_buttons';




class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            chanels: [],
            selectedChanel: null, 
        }
        this.searchChanels("UCLLdzVN9P9lV8kmJhHsiuHA");
    }
    searchChanels(channelId) {
        channelGetters.channelAllPlaylistsGetter({key: API_KEY, channelId: channelId}, chanels => {
            console.log(chanels)
            // console.log(chanel)
            this.setState({ 
                chanels: chanels,
                selectedChanel: chanels[3]
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


/* class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            chanels: [],
            selectedChanel: null, 
        }
        this.chooseChanel("UCLLdzVN9P9lV8kmJhHsiuHA");
    }
    chooseChanel(term) {
        YTSearch({key: API_KEY, term: term}, chanels => {
            console.log(chanels)
            // console.log(chanel)
            this.setState({ 
                chanels: chanels,
                selectedChanel: chanels[1]
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