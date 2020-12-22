import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, selectedVideo }) => {
    return (
        <div
            className="video-item item"
            onClick={() => selectedVideo(video)}
        >
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">
                    <p>{video.snippet.title}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoItem
