import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyApupIEL7Wc1ShQ-uqhGa0dA_rsbkvN2I4';

// Dzięki temu poniżej możemy w konsoli zobaczyć objekty z YT ze wszystkimi kluczami
/* YTSearch({key: API_KEY, term: 'polar'}, function(data) {
    console.log(data);
}); */


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('polar');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            console.log(videos)
            console.log(term)
            
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });        
    }
 

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

//put html on page (in DOM)
//ReactDOM.render(<App />, document.querySelector('.container')); 
