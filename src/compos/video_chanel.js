import React from 'react';

const VideoChanel = ({whichChanel}) => {
    if (!whichChanel) {
        return <div>Loading</div>;
    }

    const chanelId = whichChanel.id.videoId;
    
    const url = `https://www.youtube.com/embed/${chanelId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
           <div className="details">
                <div>{whichChanel.snippet.channelTitle}</div>
                <div>{whichChanel.snippet.title}</div>
                <div>{whichChanel.snippet.description}</div>
                <div>{whichChanel.snippet.channelId}</div>
                <div>{whichChanel.snippet.publishedAt}</div>
            </div>
        </div>
    )
};

export default VideoChanel