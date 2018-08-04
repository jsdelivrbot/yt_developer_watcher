import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;
    const publishingDate = Date.parse(video.snippet.publishedAt)
    let daysFromPublishingDate = Math.floor((Date.now() - publishingDate)/86400000)
    
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                    <div >    
                        <div className="media-heading">Dni od daty publikacji: <span className="media-heading-span"> {daysFromPublishingDate} </span></div>
                    </div>
                </div>
            </div>        
        </li>
    )
}

export default VideoListItem