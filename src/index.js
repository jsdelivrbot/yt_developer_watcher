import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoChanel from './compos/video_chanel';
import VideoButtons from './compos/video_buttons';

//https://www.youtube.com/watch?v=H7LUUsbpbrg
//https://www.youtube.com/channel/UCLLdzVN9P9lV8kmJhHsiuHA
const API_KEY = 'AIzaSyApupIEL7Wc1ShQ-uqhGa0dA_rsbkvN2I4';



class App extends Component {
    
    chooseChanel(chanel) {
        YTSearch({key: API_KEY, chanel: chanel}
            
         /*    , videos => {
            console.log(videos)
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        } */
    );        
    }


    render() {
        
        return (
            <div>
                <VideoChanel whichChanel={chooseChanel} />
                <VideoButtons />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));