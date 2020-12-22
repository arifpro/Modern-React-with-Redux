import React from 'react'
import './VideoItem.css'

const VideoItem = ({ title, video, image }) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={image} alt={title}/>
            <div className="content">
                <div className="header">
                    <p>{title}</p>
                </div>
            </div>
            {/* <video src={`https://youtube.com/watch?v=${video}`}></video> */}
        </div>
    )
}

export default VideoItem
